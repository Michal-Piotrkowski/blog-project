import React from 'react'

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-3 justify-items-center w-full mt-5 bg-gradient-to-t from-blue-700 from-20% to-white to-80%">
        <div className="grid grid-rows-4 col-span-1">
            <div className='text-black text-3xl font-bold flex flex-col col-span-4'>
                <h3 className='text-left text-black text-3xl font-bold row-span-2'>Kontakt:</h3>
                <div className='text-black text-3xl font-bold flex flex-column'>
                    <p>mail</p>
                </div>
            </div>
        </div>
        <div className="h-full flex flex-col items-center col-span-1">
          <img className="w-1/4 mr-3" src='/logo.png' alt="logo"/>
        </div>
        <div className="grid grid-rows-4 col-span-1">
            <div className='text-black text-3xl font-bold flex flex-col col-span-4'>
                <h3 className='text-left text-black text-3xl font-bold row-span-2'>Kontakt:</h3>
                <div className='text-black text-3xl font-bold flex flex-column'>
                    <p>mail</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer