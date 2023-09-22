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
    <div className='relative flex flex-row grid-cols-3 2xl:h-72 xl:h-64 lg:h-72 2xl:mb-10 xl:mb-8 lg:mb-8 rounded-3xl bg-black'>
        <div className="absolute w-3/4 h-full rounded-3xl opacity-80 bg-center bg-cover" style={{backgroundImage: `url(${post.featuredImage.url})`}}></div>
        <div className="relative w-3/4 2xl:h-72 xl:h-64 lg:h-72 rounded-3xl">
            <div className='flex flex-row col-span-3 2xl:ml-10 xl:ml-8 lg:ml-10 2xl:mt-8 xl:mt-6 lg:mt-8 text-left '><span className='2xl:text-2xl xl:text-xl lg:text-2xl font-bold text-white z-2'>{post.title}</span></div>
            <div className='w-[10%] absolute 2xl:top-3 xl:top-2 lg:top-3 2xl:right-5 xl:right-4 lg:right-5 rounded-full '><img className="border-white border-2 rounded-full" src={post.author.photo.url} alt="zdjecie autora"/></div>
            <div className='flex flex-row items-center justify-items-center 2xl:space-x-2 xl:space-x-2 lg:space-x-2 absolute 2xl:bottom-3 xl:bottom-3 lg:bottom-3 2xl:left-5 xl:left-5 lg:left-5'>
              <img className='2xl:w-10 xl:w-8 lg:w-10' src="/clock.svg" alt="calendar-icon"/>
              <span className='hidden' id="counter" ref={myContainer}>{
                post.author.posts.reverse()[index].content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                  return getContentFragment(index, children, typeObj, typeObj.type);
                })
              }</span>
              <span className="text-white font-semibold 2xl:text-xl xl:text-base lg:text-xl" id="show_counter" ref={counterShow}></span>
            </div>
            <div className='flex flex-row 2xl:gap-4 xl:gap-2 lg:gap-2 items-center justify-items-center absolute 2xl:bottom-3 xl:bottom-3 lg:bottom-3 2xl:right-5 xl:right-5 lg:right-5'>
              <img className='2xl:w-10 xl:w-8 lg:w-10 justify-self-end' src="/calendar.svg" alt="calendar-icon"/>
              <span className="text-white font-semibold 2xl:text-xl xl:text-base lg:text-xl">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
        <div className='w-1/4 text-white'>
          <div className='h-1/2 text-justify 2xl:mx-5 xl:mx-4 lg:mx-5 2xl:my-3 xl:my-2 lg:my-3 2xl-text-base xl:text-sm lg-text-base overflow-scroll scrolls-excerpt'>{post.excerpt}</div>
          <hr className='w-3/4 h-px mx-auto bg-gray-200 border-0 dark:bg-gray-700'></hr>
          <div className="text-center 2xl:my-8 xl:my-6 lg:my-8">
            <Link href={`/post/${post.slug}`}>
              <span className="h-1/4 2xl:text-xl xl:text-base lg:text-xl font-semibold rounded-xl text-white 2xl:px-8 xl:px-6 lg:px-8 2xl:py-3 xl:py-2 lg:py-3 cursor-pointer transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-700">
                Zobacz więcej
              </span>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default PostCard