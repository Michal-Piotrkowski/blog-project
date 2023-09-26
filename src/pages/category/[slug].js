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
    <main className="w-full 2xl:px-10 xl:px-8 lg:px-10 md:px-6 2xl:py-8 xl:py-6 lg:py-8 md:py-6 bg-gradient-to-b from-rose-400 via-cyan-900 to-black">
      <div className="h-full relative grid 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-1 md:grid-cols-1">
          <div className="relative h-full 2xl:col-span-5 xl:col-span-5 lg:col-span-1 md:col-span-1">
              {posts.reverse().map((post, index) => (
                <PostCard post={post.node} key={index} index={index} />
              ) )}
          </div>
          <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1'></div>
          <SidePanel />
          <div className='absolute 2xl:w-72 2xl:left-72 2xl:-top-4 xl:w-64 xl:left-64 xl:-top-4 lg:w-72 lg:left-80 lg:-top-4 h-auto md:w-64 md:left-56 md:-top-4 bg-blue-700 rounded-3xl text-center'><span className='text-white font-bold 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl'>NAJNOWSZE</span></div>
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