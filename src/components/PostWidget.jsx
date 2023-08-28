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
    <div className='w-full h-[500px] bg-blue-700 rounded-2xl mb-10 px-5'>
      <div className='w-full pt-5'><h3 className='text-center text-white text-3xl font-bold'>Popularne</h3>
      <hr className='w-[400px] h-px my-8 bg-white border-0 mx-auto'></hr>
      </div>
        {popularPosts?.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
          }).map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-[100px] flex-none'>
              <img 
                alt={post.title}
                height="100px"
                width="100px"
                className='align-middle rounded-full'
                src={post.featuredImage.url}
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-white font-xs'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link className="text-white font-medium text-justify p-6" href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget