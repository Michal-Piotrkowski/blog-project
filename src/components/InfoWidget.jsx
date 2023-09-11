import React from 'react'
import Link from 'next/link';

const InfoWidget = () => {
  return (
    <div className='relative h-[280px] pt-5 bg-blue-700 rounded-2xl'>
        <div className='flex flex-row justify-between items-center px-5'>
            <div className='w-20 rounded-full '><img className="border-white border-2 rounded-full" src="/ja.jpg" alt="zdjecie autora"/></div>
            <div className='flex flex-row space-x-5'>
                <Link href="https://www.instagram.com/michal_piotrkowski/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    <img className='side-panel-icon' src="/instagram.png" alt="instagram icon"/>
                </Link>                
                <Link href="https://twitter.com/michal_moo">
                    <img className='side-panel-icon' src="/twitter.png" alt="twitter icon"/>
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    <img className='lg:w-18 lg:h-12' src="/youtube.png" alt="youtube icon"/>
                </Link>
            </div>
        </div>
        <hr className='w-[400px] h-px mt-8 bg-white border-0 mx-auto'></hr>
        <div>
            <p className='p-6 text-white font-medium text-justify'>"Cześć, jestem Michał, jako młody student chcę ci pokazać jak podróżować w ciekawe miejsca z pustym portfelem."</p>
        </div>
    </div>
  )
}

export default InfoWidget