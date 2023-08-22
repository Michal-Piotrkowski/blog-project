import Head from 'next/head'
import { Inter } from 'next/font/google'
import { PostWidget } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
