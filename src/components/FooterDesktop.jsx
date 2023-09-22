import React from 'react'
import Link from 'next/link';
import { FooterForm } from '.';

const footerDesktop = () => {
  return (
    <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-3 justify-items-center 2xl:pt-5 xl:pt-4 lg:mt-5 2xl:px-10 xl:px-8 lg:px-10 bg-white">
        <section className=''>
            <FooterForm/>
        </section>
        <div className="h-full flex flex-col items-center col-span-1">
          <img className="w-1/4" src='/logo.png' alt="logo"/>
        </div>
        <div className="">
        <section className=''>
            <div className="2xl:py-8 xl:py-6 2xl:px-4 xl:px-4 mx-auto max-w-screen-md bg-blue-700 border-white border-2 rounded-xl bg-opacity-60">
                <h3 className='2xl:text-4xl xl:text-3xl tracking-tight font-extrabold text-center text-gray-900'>Więcej o mnie:</h3>
                <Link href="https://github.com/Michal-Piotrkowski">
                    <div className='flex flex-col'>
                        <p className="2xl:my-5 xl:my-4 2xl:font-light xl:font-medium text-center text-gray-900 2xl:text-xl xl:text-base">Oprócz podróży aktywnie rozwijam się w dziedzinie programowania, zobacz i śledź moje poczynania w tym zakresie!</p>
                        <img className='2xl:w-12 xl:w-10 2xl:h-12 xl:h-10 mx-auto animate-bounce' src="/github.png" alt="github icon"/> 
                    </div>
                </Link>   
                <div className='2xl:my-5 xl:my-4 2xl:text-sm xl:text-xs font-extrabold text-center text-gray-900'>   
                    <p>© 2023 Michał Piotrkowski</p>
                </div>
            </div>
        </section>
        </div>
    </div>
  )
}

export default footerDesktop