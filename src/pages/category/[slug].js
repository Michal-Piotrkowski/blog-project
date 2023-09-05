import React from 'react';
import { useRouter } from 'next/router'
import { getPostsByCategories, getCategories } from '../../../services';
import { Categories, PostCard, SidePanel } from '@/components';

const PostsByCategory = ({ posts }) => {
  const router = useRouter();
  if(router.isFallback){
    return (<h1>"Loading..."</h1>);
  }
  return (
    <main className="w-full md:w-auto px-10 my-8 bg-white">
      <div className="relative grid grid-cols-8">
          <div className="relative h-full col-span-5">
              {posts.reverse().map((post, index) => (
                <PostCard post={post.node} key={index} index={index} />
              ) )}
          </div>
          <div className='col-span-1'></div>
          <SidePanel />
          <div className='absolute left-96 -top-4 w-72 h-auto bg-blue-700 rounded-3xl text-center'><span className='text-white font-bold text-3xl'>NAJNOWSZE</span></div>
      </div>
    </main>
  );
};
export default PostsByCategory;

export async function getStaticProps({ params }) {
  console.log(params.slug)
  const posts = await getPostsByCategories(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}