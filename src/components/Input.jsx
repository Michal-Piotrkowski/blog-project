import React, {useState} from 'react'
import Link from 'next/link';
import { getInputResults } from '../../services'
import { responsePathAsArray } from 'graphql';

const Input = () => {
    const [resultPosts, setResultPosts] = useState([]);
    async function onChange(event) {
        try {
            event.preventDefault();
            if(event.target.value.length > 2){
                const response = await getInputResults(event.target.value);
                const change = resultPosts.length = 0;
                setResultPosts(change);
                setResultPosts(resultPosts.concat(response));
            }
            else{
                setResultPosts([]);
            }
        } 
        catch (err) {
            console.log(err);
        }
    }

    function results(){
        if(resultPosts.length > 0){
            return(
                resultPosts.map((e) =>             
                    <Link className="2xl:w-1/1 xl:w-5/6 lg:w-1/1 md:w-3/4 sm:w-3/4 flex flex-row justify-left items-center gap-x-5 bg-black 2xl:p-6 xl:p-6 lg:p-6 md:p-6 sm:p-2 text-white text-md text-justify font-medium" href={`/post/${e.node.slug}`} key={e.node.title}>
                        <img 
                            alt={e.node.title}
                            className='2xl:w-[130px] xl:w-[120px] lg:w-[130px] md:w-[120px] sm:w-[110px]  2xl:h-[75px] xl:h-[65px] lg:h-[75px] md:h-[65px] sm:h-[55px] align-middle rounded-xl border-white border-2'
                            src={e.node.featuredImage.url}
                        />
                        <p className='2xl:text-base xl:text-sm lg:text-sm md:text-sm sm:text-sm'>{e.node.title}</p>
                    </Link>
                )
            );
        }
    }

    return (
        <div className='2xl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6'>
            <form className='w-full h-full flex flex-row justify-left items-center col-span-4 2xl:gap-x-5 xl:gap-x-4 lg:gap-x-4 md:gap-x-5 sm:gap-x-2'>
                <input 
                    name="search"
                    className='w-3/4 h-3/4 2xl:p-5 xl:p-4 lg:p-4 md:p-4 sm:p-2 border-none focus:outline-none bg-gray-200 text-gray-400 2xl:text-xl xl:text-base lg:text-xl md:text-base sm:text-base rounded-xl' 
                    label="Search" 
                    radius="lg" 
                    placeholder="Szukaj wpisu..." 
                    autoFocus
                    onChange={(e) => onChange(e)}
                />
                <svg className='fill-gray-400 2xl:w-8 xl:w-8 lg:w-10 md:w-8 sm:w-8 2xl:h-8 xl:h-8 lg:h-10 md:h-8 sm:h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </form>
            <div className='w-auto absolute flex flex-col'>
                {results()}
            </div>
        </div>
    );
}

export default Input