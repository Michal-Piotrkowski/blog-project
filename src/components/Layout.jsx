import React from 'react'
import {Header} from "./";

const Layout = ({children}) => {
  return (
    <div className='w-full'>
        <Header/>
        <hr></hr>
        {children}
    </div>
  )
}

export default Layout