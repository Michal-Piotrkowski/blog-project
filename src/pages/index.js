import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import {PostCard, SidePanel } from '@/components'
import { getPosts } from '../../services'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
    <main className="w-full 2xl:px-10 xl:px-8 lg:px-10 2xl:py-8 xl:py-6 lg:py-8 bg-gradient-to-b from-rose-400 via-cyan-900 to-black">
      <Head>
        <title>Michał Piotrkowski</title> 
        <link rel="icon" href="/logo.png"/>
      </Head>

      <div className="h-full relative grid 2xl:grid-cols-8 xl:grid-cols-8 lg:xl:grid-cols-3">
          <div className="relative h-full 2xl:col-span-5 xl:col-span-5 lg:col-span-1">
              {posts.reverse().map((post, index) => (
                <PostCard post={post.node} key={index} index={index} />
              ) )}
          </div>
          <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1'></div>
            <SidePanel />
          <div className='absolute 2xl:w-72 2xl:left-72 2xl:-top-4 xl:w-64 xl:left-64 xl:-top-4 lg:w-72 lg:left-80 lg:-top-4 h-auto bg-blue-700 rounded-3xl text-center'><span className='text-white font-bold 2xl:text-3xl xl:text-2xl lg:text-2xl'>NAJNOWSZE</span></div>
      </div>
    </main>
  )
}

export async function getStaticProps(){
  const posts = await getPosts() || [];
  return {props: {posts}};
}