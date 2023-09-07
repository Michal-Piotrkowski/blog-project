import Link from 'next/link';
import React, {useState, useEffect, useRef} from 'react'
import { getCategories } from '../../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [inSearchMode, setInSearchMode] = useState([]);
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="grid grid-cols-12">
      <Link className="text-center col-span-3" href={`/`}  onClick={(e)=> {
        if(selected){
          selected.backgroundColor = ""
          selected.color = ""
          setSelected(selected)
        }
      }}>
        <div className="flex flex-row items-center ml-10 text-black my-5">
          <img className="w-10 mr-3" src='/logo.png' alt="logo"/>
            <span className="text-left text-black text-2xl font-bold">
                Michał Piotrkowski
            </span>
        </div>
      </Link>
      <div className='flex flex-row items-center justify-center col-span-1' onClick={(() => {
        setInSearchMode(true)
      })}>
        <img className="w-10 mr-3" src='/search.svg' alt="search"/>
      </div>
        <div className="grid grid-cols-4 col-span-8">
            {categories.map((category) => (
                <Link className="col-span-1" key={category.slug} href={`/category/${category.slug}`} onClick={(e)=>
                {
                  if(selected){
                    selected.backgroundColor = ""
                    selected.color = ""
                    setSelected(selected)
                  }
                  e.target.style.backgroundColor = "#F2546B";
                  e.target.style.color = "white";
                  setSelected(e.target.style)
                }}>
                    <p className='flex flex-col justify-center text-center w-full h-full text-black text-gray-400 text-xl hover:text-pink-700 cursor-pointer'>{category.name}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Header