import Link from 'next/link';
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { getCategories } from '../../services';
import { Input } from '.';

const Header = () => {
  const router = useRouter()
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="sticky top-0 grid grid-cols-12 z-50 bg-white">
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
      <Input/>
      <div className='grid grid-cols-4 col-span-5'>
          {categories.map((category) => (
              <Link className='col-span-1' key={category.slug} href={`/category/${category.slug}`}>
                  <p className={`flex flex-col justify-center text-center w-full h-full text-md cursor-pointer ${router.query.slug === category.slug ? 'bg-pink-700 text-white hover:text-gray-200' : 'bg-white text-gray-400 hover:text-pink-700'}`}>{category.name}</p>
              </Link>
          ))}
      </div>
    </div>
  )
}

export default Header