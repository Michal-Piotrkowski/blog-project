import React from 'react'
import Link from 'next/link';

const InfoWidget = () => {
  return (
    <div className='h-1/3 2xl:py-5 xl:py-4 lg:py-5 md:py-4 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-700 2xl:rounded-2xl xl:rounded-2xl lg:rounded-2xl md:rounded-2xl'>
        <div className='flex flex-row 2xl:justify-between xl:justify-between lg:justify-center lg:space-x-5 md:justify-center md:space-x-5 items-center 2xl:px-5 xl:px-4 lg:px-5 md:px-4'>
            <div className='2xl:w-20 xl:w-16 lg:w-20 md:w-20 rounded-full '><img className="border-white border-2 rounded-full" src="/ja.jpg" alt="zdjecie autora"/></div>
            <div className='flex flex-row 2xl:space-x-5 xl:space-x-4 lg:space-x-5 md:space-x-4'>
                <Link href="https://www.instagram.com/michal_piotrkowski/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    <img className='side-panel-icon' src="/instagram.png" alt="instagram icon"/>
                </Link>                
                <Link href="https://twitter.com/michal_moo">
                    <img className='side-panel-icon' src="/twitter.png" alt="twitter icon"/>
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    <img className='2xl:w-18 2xl:h-12 xl:w-16 xl:h-10 lg:w-18 lg:h-12 md:w-18 md:h-12 hover:animate-spin' src="/youtube.png" alt="youtube icon"/>
                </Link>
            </div>
        </div>
        <hr className='w-[90%] h-px 2xl:mt-8 xl:mt-4 lg:mt-8 md:mt-4 bg-white border-0 mx-auto'></hr>
        <div>
            <p className='2xl:p-6 xl:p-4 lg:p-6 md:p-4 text-white font-medium text-center 2xl:text-base xl:text-sm lg:text-base md:text-base'>"Cześć, jestem Michał, jako młody student chcę ci pokazać jak podróżować w ciekawe miejsca z pustym portfelem."</p>
        </div>
    </div>
  )
}

export default InfoWidget