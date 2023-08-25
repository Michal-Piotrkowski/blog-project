import React from 'react'

const Header = () => {
  return (
    <div className="grid grid-cols-12 my-5">
        <div className="ml-10 col-span-4 text-black">
            <span className="text-left text-black text-2xl font-bold">
                Michał Piotrkowski
            </span>
        </div>
        <div className="col-span-2 text-black text-center text-gray-400 text-xl hover:text-pink-700">Tanie podróżowanie</div>
        <div className="col-span-2 text-black text-center text-gray-400 text-xl hover:text-pink-700">Polska</div>
        <div className="col-span-2 text-black text-center text-gray-400 text-xl hover:text-pink-700">Europa</div>
        <div className="col-span-2 text-black text-center text-gray-400 text-xl hover:text-pink-700">Reszta świata</div>
    </div>
  )
}

export default Header