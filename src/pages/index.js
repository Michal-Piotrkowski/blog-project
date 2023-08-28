import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { PostWidget, PostCard } from '@/components'
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
                <div>
                  <PostCard post={post.node} key={index} index={index} />
                </div>
              ) )}
          </div>
          <div className='col-span-1'></div>
          <div className='sticky top-16 col-span-2 h-[790px]'>
            <PostWidget />
            <div className='relative w-full h-[280px] pt-5 bg-blue-700 rounded-2xl'>
              <div className='w-20 absolute top-3 left-5 rounded-full '><img className="border-white border-2 rounded-full" src="/ja.jpg" alt="zdjecie autora"/></div>
              <div className='w-full flex flex-row space-x-5 justify-end pr-5'>
                <Link href="https://www.instagram.com/michal_piotrkowski/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                  <img className='w-12 h-12' src="/instagram.png" alt="instagram icon"/>
                </Link>                
                <Link href="https://twitter.com/michal_moo">
                  <img className='w-12 h-12' src="/twitter.png" alt="twitter icon"/>
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                  <img className='w-18 h-12' src="/youtube.png" alt="youtube icon"/>
                </Link>
              </div>
              <hr className='w-[400px] h-px mt-8 bg-white border-0 mx-auto'></hr>
              <div className='w-full h-full'>
                <p className='text-white font-medium text-justify p-6'>"Cześć, jestem Michał, jako młody student chcę ci pokazać jak podróżować w ciekawe miejsca z pustym portfelem."</p>
              </div>
            </div>
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