import React from 'react'

const Header = () => {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-4 text-black">
            <span className="text-left">
                Michał Piotrkowski
            </span>
        </div>
        <div className="col-span-2 text-black text-center">1</div>
        <div className="col-span-2 text-black text-center">2</div>
        <div className="col-span-2 text-black text-center">3</div>
        <div className="col-span-2 text-black text-center">4</div>
    </div>
  )
}

export default Header