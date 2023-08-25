import Head from 'next/head'
import { Inter } from 'next/font/google'
import { PostWidget, PostCard } from '@/components'
import { getPosts } from '../../services'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
    <main className="w-full md:w-auto px-10 my-8 bg-white">
      <Head>
        <title>Michał Piotrkowski</title> 
        <link rel="icon" href="/KOMPAS.png"/>
      </Head>

      <div className="relative grid grid-cols-8">
          <div className="relative h-full col-span-5">
              {posts.map((post, index) => (
                <div>
                  <PostCard post={post.node} key={index} index={index} /><PostCard post={post.node} key={index} index={index} /><PostCard post={post.node} key={index} index={index} />
                </div>
              ) )}
          </div>
          <div className='col-span-1'></div>
          <div className='sticky top-16 col-span-2 h-[790px]'>
            <div className='w-full h-[500px] bg-blue-700 rounded-2xl mb-10'></div>
            <div className='w-full h-[280px] bg-blue-700 rounded-2xl'>sssss</div>
          </div>
          <div className='absolute left-96 -top-4 text-3xl bg-blue-700 w-72 h-auto rounded-3xl text-center'><span className='text-white font-bold'>NAJNOWSZE</span></div>
      </div>
    </main>
  )
}

export async function getStaticProps(){
  const posts = await getPosts() || [];
  return {props: {posts}};
}