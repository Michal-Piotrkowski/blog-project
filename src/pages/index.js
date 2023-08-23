import Head from 'next/head'
import { Inter } from 'next/font/google'
import { PostWidget } from '@/components'
import { getPosts } from '../../services'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  console.log(posts);
  return (
    <main className="container mx-auto px-10 mb-8 bg-white">
      <Head>
        <title>Michał Piotrkowski</title> 
        <link rel="icon" href="/KOMPAS.png"/>
      </Head>

      <div className="grid grid-cols-12">
        <PostWidget/>
      </div>
    </main>
  )
}

export async function getStaticProps(){
  const posts = await getPosts() || [];
  return {props: {posts}};
}