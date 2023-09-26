import React from 'react'
require("dotenv").config();

const FooterForm = () => {
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "b134938d-bcab-4530-b484-5e409f1a1fe3";
  return (
    <div className="2xl:py-8 xl:py-6 lg:py-8 md:py-8 2xl:px-4 xl:px-4 lg:px-4 md:px-4 mx-auto max-w-screen-md bg-blue-700 border-x-white border-x-2 rounded-t-xl bg-opacity-60" action="https://api.web3forms.com/submit" method="POST">
        <h2 className="2xl:mb-4 xl:mb-2 lg:mb-4 md:mb-4 2xl:text-4xl xl:text-3xl lg:text-4xl md:text-4xl tracking-tight font-extrabold text-center text-white">Kontakt</h2>
        <p className="2xl:mb-8 xl:mb-6 lg:mb-8 md:mb-8 font-light text-center text-gray-200 dark:text-gray-100 2xl:text-xl xl:text-base lg:text-xl md:text-xl">Chciałbyś podzielić się jakąś przygodą lub poradą? Nie zwlekaj tylko napisz do nas!</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="2xl:space-y-8 xl:space-y-6 lg:space-y-8 md:space-y-8">
            <input type="hidden" name="access_key" value={apiKey}/>
            <div>
                <label htmlFor="email" className="block 2xl:mb-2 xl:mb-2 lg:mb-2 md:mb-2 2xl:font-xl xl:text-base lg:font-xl md:font-xl font-semibold text-gray-100">Twój nick</label>
                <input type="text" name="name" id="email" className="block w-full 2xl:p-2.5 xl:p-1.5 lg:p-2.5 md:p-2.5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 2xl:text-sm lg:text-sm md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="nick" required/>
            </div>
            <div>
                <label htmlFor="email" className="block 2xl:mb-2 xl:mb-2 lg:mb-2 md:mb-2 2xl:font-xl xl:text-base lg:font-xl md:font-xl font-semibold text-gray-100">Twój email</label>
                <input type="email" name="email" id="email" className="block w-full 2xl:p-2.5 xl:p-1.5 lg:p-2.5 md:p-2.5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 2xl:text-sm lg:text-sm md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="email@coś.com" required/>
            </div>
            <div className="2xl:col-span-2">
                <label htmlFor="message" className="block 2xl:mb-2 xl:mb-2 lg:mb-2 md:mb-2 2xl:font-xl xl:text-base lg:font-xl md:font-xl font-semibold text-gray-100">Twoja wiadomość</label>
                <textarea name="message" id="message" rows="6" className="block 2xl:p-2.5 xl:p-1.5 lg:p-2.5 md:p-2.5 w-full 2xl:text-sm xl:text-base lg:text-sm md:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Napisz co i jak..."></textarea>
            </div>
            <button type="submit" className="2xl:py-3 xl:py-2 lg:py-3 md:py-3 2xl:px-5 xl:px-4 lg:px-5 md:px-5 2xl:text-sm xl:text-sm lg:text-sm md:text-sm font-medium text-center text-white border-solid border-2 border-white rounded-lg bg-none hover:bg-white hover:text-gray-500">Send message</button>
        </form> 
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  )
}

export default FooterForm