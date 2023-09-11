import React from 'react'
require("dotenv").config();

const FooterForm = () => {
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "b134938d-bcab-4530-b484-5e409f1a1fe3";
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" action="https://api.web3forms.com/submit" method="POST">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Kontakt</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Chciałbyś podzielić się jakąś przygodą lub poradą? Nie zwlekaj tylko napisz do nas!</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
            <input type="hidden" name="access_key" value={apiKey}/>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Twój nick</label>
                <input type="text" name="name" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="nick" required/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Twój email</label>
                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="email@coś.com" required/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Twoja wiadomość</label>
                <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Napisz co i jak..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
        </form> 
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  )
}

export default FooterForm