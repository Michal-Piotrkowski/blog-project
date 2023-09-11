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
    <div className='h-[500px] bg-blue-700 rounded-2xl mb-10 px-5'>
      <div className='pt-5'><h3 className='text-center text-white text-3xl font-bold'>Popularne</h3>
      <hr className='w-[400px] h-px my-8 bg-white border-0 mx-auto'></hr>
      </div>
        {popularPosts?.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
          }).map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4 transition duration-150 hover:scale-105 ease-in duration-300'>
            <div className='flex-none'>
              <img 
                alt={post.title}
                className='w-[130px] h-[75px] align-middle rounded-xl border-white border-2'
                src={post.featuredImage.url}
              />
            </div>
            <div className='ml-4 border-b-[1px] border-gray-400 pb-2'>
              <p className='text-white text-sm font-extralight'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link className="p-6 text-white text-md text-justify font-medium" href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget