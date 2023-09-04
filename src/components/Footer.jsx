import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-3 justify-items-center w-full mt-5 bg-gradient-to-t from-blue-700 from-20% to-white to-80%">
    <section className='ml-10'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Kontakt</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Chciałbyś podzielić się jakąś przygodą lub poradą? Nie zwlekaj tylko napisz do nas!</p>
            <form action="#" className="space-y-8">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Twój email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="email@coś.com" required/>
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temat</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Temat wiadomośći" required/>
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Twoja wiadomość</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Napisz co i jak..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
            </form>
        </div>
        </section>
        <div className="h-full flex flex-col items-center col-span-1">
          <img className="w-1/4 mr-3" src='/logo.png' alt="logo"/>
        </div>
        <div className="">
        <section className=''>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md block">
                <h3 className='text-4xl tracking-tight font-extrabold text-center text-gray-900'>Więcej o mnie:</h3>
                <Link href="https://www.instagram.com/michal_piotrkowski/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
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