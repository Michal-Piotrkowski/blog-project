import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import {PostCard, SidePanel } from '@/components'
import { getPosts } from '../../services'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
    <main className="w-full md:w-auto px-10 my-8 bg-white">
      <Head>
        <title>Michał Piotrkowski</title> 
        <link rel="icon" href="/logo.png"/>
      </Head>

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
  )
}

export async function getStaticProps(){
  const posts = await getPosts() || [];
  return {props: {posts}};
}