import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { getCategories } from '../../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="grid grid-cols-12 my-5">
      <Link className="text-center col-span-4" href={`/`}>
        <div className="flex flex-row items-center ml-10 text-black">
          <img className="w-10 mr-3" src='/logo.png' alt="logo"/>
            <span className="text-left text-black text-2xl font-bold">
                Michał Piotrkowski
            </span>
        </div>
      </Link>
        <div className="grid grid-cols-4 col-span-8">
            {categories.map((category) => (
                <Link className="text-center" key={category.slug} href={`/category/${category.slug}`}>
                    <span className='col-span-1 text-black text-center text-gray-400 text-xl hover:text-pink-700 cursor-pointer'>{category.name}</span>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Header