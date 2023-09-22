import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { getCategories } from '../../services';
import { Input } from '.';
const NavMobile = () => {
    const router = useRouter()
    const [categories, setCategories] = useState([]);
    const [isClosed, setIsClosed] = useState(true);
    useEffect(() => {
    getCategories()
        .then((newCategories) => setCategories(newCategories));
    }, []);

    const handleMenu = () => {
        setIsClosed(!isClosed);
    };
    return (
    <nav className="grid grid-cols-12 bg-white">
      <Link className="text-center col-span-4" href={`/`}>
        <div className="flex flex-row items-center 2xl:ml-10 xl:ml-8 lg:ml-8 2xl:my-6 xl:my-5 lg:my-5 text-black">
          <img className="2xl:w-10 xl:w-8 lg:w-10 2xl:mr-3 xl:mr-2 lg:mr-2" src='/logo.png' alt="logo"/>
            <span className="text-left text-black 2xl:text-2xl xl:text-xl lg:text-xl font-bold">
              Michał Piotrkowski
            </span>
        </div>
      </Link>
      <Input/>
      <div className={`${isClosed ? 'col-span-2' : 'w-screen h-screen sticky top-0 right-0 bg-white  overscroll-none z-100'}`}>
        <div className='w-full h-full flex flex-row justify-center items-center'>
            <button class="h-full space-y-2 transform transition-all duration-300 origin-center overflow-hidden group" onClick={() => handleMenu()}>
                <span className={`w-10 h-1 block bg-gray-600 transform transition-all duration-300 ${!isClosed ? "-rotate-[45deg] scale-x-50 translate-y-3" : "rotate-[0deg]"}`}></span>
                <span className={`w-10 h-1 block bg-gray-600 transform transition-all duration-300 ${!isClosed ? "translate-x-10 delay-75" : ""}`}></span>
                <span className={`w-10 h-1 block bg-gray-600 transform transition-all duration-300 ${!isClosed ? "rotate-[45deg] scale-x-50 -translate-y-3" : "rotate-[0deg]"}`}></span>
            </button>
        </div>
        <div className={isClosed ? "hidden" : "absolute top-0 mx-auto"}>
            <ul className="flex flex-col items-center">
                {categories.map((category) => (
                    <Link className='col-span-1' key={category.slug} href={`/category/${category.slug}`}>
                        <li className={`flex flex-col justify-center text-center 2xl:text-base xl:text-sm cursor-pointer ${router.query.slug === category.slug ? 'bg-pink-700 text-white hover:text-gray-200' : 'bg-white text-gray-400 hover:text-pink-700'}`}>{category.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
       </div>
    </nav>
    
    )
}

export default NavMobile