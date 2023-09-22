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
    <main className="w-full 2xl:px-10 xl:px-8 2xl:my-8 xl:my-6 bg-white">
      <div className="h-full relative grid grid-cols-8">
          <div className="relative h-full col-span-5">
              {posts.reverse().map((post, index) => (
                <PostCard post={post.node} key={index} index={index} />
              ) )}
          </div>
          <div className='col-span-1'></div>
          <SidePanel />
          <div className='absolute 2xl:w-72 2xl:left-72 2xl:-top-4 xl:w-64 xl:left-64 xl:-top-4 h-auto bg-blue-700 rounded-3xl text-center'><span className='text-white font-bold 2xl:text-3xl xl:text-2xl'>NAJNOWSZE</span></div>
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