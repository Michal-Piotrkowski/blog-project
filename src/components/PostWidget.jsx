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
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='flex-none'>
              <img 
                alt={post.title}
                className='w-[100px] h-[75px] align-middle rounded-full'
                src={post.featuredImage.url}
              />
            </div>
            <div className='ml-4'>
              <p className='text-white font-xs'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link className="p-6 text-white font-medium text-justify" href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget