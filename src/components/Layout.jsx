import React from 'react'
import {Header, Footer} from "./";

const Layout = ({children}) => {
  return (
    <div className='w-full'>
        <Header/>
        <hr></hr>
        {children}
        <hr></hr>
        <Footer/>
    </div>
  )
}

export default Layout