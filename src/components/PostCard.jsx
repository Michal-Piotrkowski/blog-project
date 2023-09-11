import React, { useRef, useEffect, useState }from 'react';
import Link from 'next/link';
import moment from 'moment';
import Countable from 'countable';

const PostCard = ({post, index}) => {
  const myContainer = useRef(null);
  const counterShow = useRef(null);
  const [count, setCount] = useState(0);
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  useEffect(() => {
    Countable.count(myContainer.current?.innerText, count => {
      if(count.words >= 200){
        counterShow.current.innerText = Math.round(count.words/200) + " min"
      }
      else{
        counterShow.current.innerText = " < 1 min"
      }
  });
  })
  
  return (
    <div className='relative flex flex-row grid-cols-3 h-auto mb-10 rounded-3xl bg-black'>
        <div className="absolute w-3/4 lg:h-full rounded-3xl opacity-80 bg-center bg-cover" style={{backgroundImage: `url(${post.featuredImage.url})`}}></div>
        <div className="relative w-3/4 lg:h-72 rounded-3xl">
            <div className='flex flex-row col-span-3 ml-10 mt-5 text-left '><span className='text-2xl font-bold text-white z-2'>{post.title}</span></div>
            <div className='w-20 absolute top-3 right-5 rounded-full '><img className="border-white border-2 rounded-full" src={post.author.photo.url} alt="zdjecie autora"/></div>
            <div className='flex flex-row items-center justify-items-center space-x-2 absolute bottom-3 left-5'>
              <img className='w-10' src="/clock.svg" alt="calendar-icon"/>
              <span className='hidden' id="counter" ref={myContainer}>{
                post.author.posts.reverse()[index].content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                  return getContentFragment(index, children, typeObj, typeObj.type);
                })
              }</span>
              <span className="text-white font-semibold text-xl" id="show_counter" ref={counterShow}></span>
            </div>
            <div className='grid grid-cols-2 gap-4 items-center justify-items-center absolute bottom-3 right-5 flex flex-row'>
              <img className='w-10 justify-self-end' src="/calendar.svg" alt="calendar-icon"/>
              <span className="text-white font-semibold text-xl">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
        <div className='w-1/4 text-white'>
          <div className='h-1/2 text-justify mx-5 my-3'>{post.excerpt}</div>
          <hr className='w-3/4 mx-auto h-px mt-8 mb-5 bg-gray-200 border-0 dark:bg-gray-700'></hr>
          <div className="text-center">
            <Link href={`/post/${post.slug}`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-700 text-2xl font-semibold rounded-xl text-white px-8 py-3 cursor-pointer">
                Zobacz więcej
              </span>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default PostCard