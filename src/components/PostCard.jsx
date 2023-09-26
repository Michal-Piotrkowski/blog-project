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
    <div className='post-container'>
        <div className="post-background" style={{backgroundImage: `url(${post.featuredImage.url})`}}></div>
        <div className="post-content-container">
            <div className='w-3/4 flex flex-row col-span-3 2xl:ml-10 xl:ml-8 lg:ml-10 md:ml-8 2xl:mt-8 xl:mt-6 lg:mt-8 md:mt-6 text-left '><span className='2xl:text-2xl xl:text-xl lg:text-2xl md:text-xl font-bold text-white z-2'>{post.title}</span></div>
            <div className='w-[10%] absolute 2xl:top-3 xl:top-2 lg:top-3 md:top-2 2xl:right-5 xl:right-4 lg:right-5 md:right-4 rounded-full '><img className="border-white border-2 rounded-full" src={post.author.photo.url} alt="zdjecie autora"/></div>
            <div className='flex flex-row items-center justify-items-center 2xl:space-x-2 xl:space-x-2 lg:space-x-2 md:space-x-2 absolute 2xl:bottom-3 xl:bottom-3 lg:bottom-3 md:bottom-3 2xl:left-5 xl:left-5 lg:left-5 md:left-5'>
              <img className='2xl:w-10 xl:w-8 lg:w-10 md:w-8' src="/clock.svg" alt="calendar-icon"/>
              <span className='hidden' id="counter" ref={myContainer}>{
                post.author.posts.reverse()[index].content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                  return getContentFragment(index, children, typeObj, typeObj.type);
                })
              }</span>
              <span className="text-white font-semibold 2xl:text-xl xl:text-base lg:text-xl md:text-base" id="show_counter" ref={counterShow}></span>
            </div>
            <div className='flex flex-row 2xl:gap-4 xl:gap-2 lg:gap-2 md:gap-2 items-center justify-items-center absolute 2xl:bottom-3 xl:bottom-3 lg:bottom-3 md:bottom-3 2xl:right-5 xl:right-5 lg:right-5 md:right-5'>
              <img className='2xl:w-10 xl:w-8 lg:w-10 md:w-8 justify-self-end' src="/calendar.svg" alt="calendar-icon"/>
              <span className="text-white font-semibold 2xl:text-xl xl:text-base lg:text-xl md:text-base">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
        <div className='2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full text-white'>
          <div className='2xl:h-1/2 xl:h-1/2 lg:h-1/2 md:h-1/2 sm:h-full text-justify 2xl:mx-5 xl:mx-4 lg:mx-5 md:mx-4 sm:mx-4 2xl:my-3 xl:my-2 lg:my-3 md:my-2 2xl-text-base xl:text-sm lg-text-base md:text-sm overflow-scroll scrolls-excerpt'>{post.excerpt}</div>
          <hr className='w-3/4 h-px mx-auto bg-gray-200 border-0 dark:bg-gray-700'></hr>
          <div className="text-center 2xl:my-8 xl:my-6 lg:my-8 md:my-6">
            <Link href={`/post/${post.slug}`}>
              <span className="post-btn">
                Zobacz więcej
              </span>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default PostCard