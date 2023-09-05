import React from 'react'

const Loader = () => {
  return (
    <div className='text-center'>
        <div className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'>
            <img className="" src='/loader.svg' alt="loader"/>
        </div>
    </div>
  )
}

export default Loader