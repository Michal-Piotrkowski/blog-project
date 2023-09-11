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
                    <Link className="flex flex-row justify-left items-center gap-x-5 bg-black p-6 text-white text-md text-justify font-medium" href={`/post/${e.node.slug}`} key={e.node.title}>
                        <img 
                            alt={e.node.title}
                            className='w-[130px] h-[75px] align-middle rounded-xl border-white border-2'
                            src={e.node.featuredImage.url}
                        />
                        {e.node.title}
                    </Link>
                )
            );
        }
    }

    return (
        <div className='col-span-4'>
            <form className='w-full h-full flex flex-row justify-left items-center col-span-4 gap-x-5'>
                <input 
                    name="search"
                    className='w-3/4 h-3/4 p-5 border-none focus:outline-none bg-gray-200 text-gray-400 text-xl rounded-xl' 
                    label="Search" 
                    radius="lg" 
                    placeholder="Szukaj wpisu..." 
                    autoFocus
                    onChange={(e) => onChange(e)}
                />
                <svg className='fill-gray-400 w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </form>
            <div className='absolute flex flex-col'>
                {results()}
            </div>
        </div>
    );
}

export default Input