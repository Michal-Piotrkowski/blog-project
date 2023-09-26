import React, {useState, useEffect} from 'react'
import moment from 'moment';
import Link from 'next/link';

import { getPopularPosts } from '../../services';

const PostWidget = ({categories, slug}) => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    getPopularPosts().then((result) => setPopularPosts(result));
  }, [])

  return (
    <div className='2xl:h-2/3 xl:h-2/3 lg:h-2/3 md:h-2/3 sm:h-2/3 bg-gradient-to-b from-rose-400 via-cyan-900 to-black rounded-2xl 2xl:mb-10 xl:mb-8 lg:mb-10 md:mb-8 2xl:px-5 xl:px-4 lg:px-5 md:px-4'>
      <div className='2xl:pt-5 xl:pt-4 lg:pt-5 md:pt-4'><h3 className='text-center text-white 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-2xl font-bold'>Popularne</h3>
      <hr className='2xl:w-[calc(100%-5px)] xl:w-[calc(100%-4px)] lg:w-[calc(100%-5px)] md:w-[calc(100%-4px)] h-px 2xl:my-8 xl:my-4 lg:my-8 md:my-4 bg-white border-0 mx-auto'></hr>
      </div>
      <div className='grid 2xl:grid-cols-1 xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
        {popularPosts?.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
          }).map((post) => (
          <Link  href={`/post/${post.slug}`} key={post.title} className='flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col lg:flex-justify-center md:flex-justify-center items-center w-full 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-4 transition duration-150 hover:scale-105 ease-in duration-300'>
            <div className='flex-none'>
              <img 
                alt={post.title}
                className='2xl:w-[130px] xl:w-[120px] lg:w-[200px] md:w-[190px] sm:w-[150px] 2xl:h-[75px] xl:h-[65px] lg:h-[120px] sm:h-[90px] align-middle rounded-xl border-white border-2'
                src={post.featuredImage.url}
              />
            </div>
            <div className='2xl:ml-4 xl:ml-3 lg:ml-4 2xl:py-1 xl:py-1 lg:py-2 md:py-2 border-b-[1px] border-gray-400'>
              <p className='2xl:text-left xl:text-left lg:text-center md:text-center text-white 2xl:text-sm xl:text-xs lg:text-base md:text-base font-extralight'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <span className="2xl:py-6 xl:py-4 lg:py-6 md:py-4 text-white text-left font-medium 2xl:text-base xl:text-sm lg:text-base md:text-base" key={post.title}>
                {post.title}
              </span>
            </div>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default PostWidget