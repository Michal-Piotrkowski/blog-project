import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { getCategories } from '../../services';
import { Input } from '.';
const NavDesktop = () => {
    const router = useRouter()
    const [categories, setCategories] = useState([]);
    useEffect(() => {
    getCategories()
        .then((newCategories) => setCategories(newCategories));
    }, []);
    return (
        <nav className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-6 bg-white">
            <Link className="text-center 2xl:col-span-3 xl:col-span-3 lg:col-span-3" href={`/`}>
                <div className="flex flex-row items-center 2xl:ml-10 xl:ml-8 2xl:my-6 xl:my-5 text-black">
                <img className="2xl:w-10 xl:w-8 2xl:mr-3 xl:mr-2" src='/logo.png' alt="logo"/>
                    <span className="text-left text-black 2xl:text-2xl xl:text-xl font-bold">
                    Michał Piotrkowski
                    </span>
                </div>
            </Link>
            <Input/>
            <div className='grid grid-cols-4 col-span-5'>
                {categories.map((category) => (
                    <Link className='col-span-1' key={category.slug} href={`/category/${category.slug}`}>
                        <p className={`flex flex-col justify-center text-center w-full h-full 2xl:text-base xl:text-sm cursor-pointer ${router.query.slug === category.slug ? 'bg-pink-700 text-white hover:text-gray-200' : 'bg-white text-gray-400 hover:text-pink-700'}`}>{category.name}</p>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default NavDesktop