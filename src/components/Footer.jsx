import React from 'react'
import Link from 'next/link';
import { FooterForm } from '.';

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-3 justify-items-center w-full mt-5 bg-gradient-to-t from-blue-700 from-20% to-white to-80%">
        <section className='ml-10'>
            <FooterForm/>
        </section>
        <div className="h-full flex flex-col items-center col-span-1">
          <img className="w-1/4 mr-3" src='/logo.png' alt="logo"/>
        </div>
        <div className="">
        <section className=''>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md block">
                <h3 className='text-4xl tracking-tight font-extrabold text-center text-gray-900'>Więcej o mnie:</h3>
                <Link href="https://github.com/Michal-Piotrkowski">
                    <div className='flex flex-col'>
                        <p className="my-5 font-light text-center text-gray-500 sm:text-xl">Oprócz podróży aktywnie rozwijam się w dziedzinie programowania, zobacz i śledź moje poczynania w tym zakresie!</p>
                        <img className='w-12 h-12 mx-auto' src="/github.png" alt="github icon"/> 
                    </div>
                </Link>   
                <div className='my-5 text-sm font-extrabold text-center text-gray-900'>   
                    <p>© 2023 Michał Piotrkowski</p>
                </div>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Footer