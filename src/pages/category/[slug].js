import React from 'react';
import { getPostsByCategories } from '../../../services';
const PostDetails = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          1 2 3
        </div>
      </div>
    </div>
  );
};
export default PostDetails;

// export async function getStaticProps(){
//   const posts = await getPostsByCategories() || [];
//   return {props: {posts}};
// }