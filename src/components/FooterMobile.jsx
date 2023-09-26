import React from 'react'
import Link from 'next/link';
import { FooterForm } from '.';

const footerMobile = () => {
  return (
    <div className="w-full flex flex-col lg:space-y-9 md:space-y-9 lg:py-8 lg:px-10 md:py-8 bg-gradient-to-t from-blue-700 from-10% to-white to-90%">
        <section className=''>
            <div className="lg:py-10 md:py-10 lg:px-4 md:px-4 mx-auto max-w-screen-md bg-blue-700 border-white border-2 rounded-xl bg-opacity-60">
                <h3 className='lg:text-4xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900'>Więcej o mnie:</h3>
                    <Link href="https://github.com/Michal-Piotrkowski">
                        <div className='flex flex-col'>
                            <p className="lg:my-5 md:my-5 lg:font-semibold text-center text-gray-900 lg:text-xl md:text-xl">Oprócz podróży aktywnie rozwijam się w dziedzinie programowania, zobacz i śledź moje poczynania w tym zakresie!</p>
                            <div className='w-full grid grid-cols-2 lg:gap-x-4 md:gap-x-4'>
                                <img className='lg:w-20 md:w-20 lg:h-20 md:h-20 flex justify-self-end hover:animate-pulse' src="/github.png" alt="github icon"/> 
                                <img className="lg:w-20 md:w-20 lg:h-20 md:h-20 flex justify-self-start hover:animate-pulse" src='/logo.png' alt="logo"/>
                            </div>
                        </div>
                    </Link>   
                <div className='lg:my-5 md:my-5 lg:text-base md:text-base font-extrabold text-center text-gray-900'>  
                    <p>© 2023 Michał Piotrkowski</p>
                </div>
            </div>
        </section>
        <section className=''>
            <FooterForm/>
        </section>
    </div>
  )
}

export default footerMobile