import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [width, setWindowWidth] = useState(0);
  const breakpointMobileSize = 1352
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    console.log(isMobileNav)
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className='sticky top-0 z-50'>
      {width < breakpointMobileSize ? <NavMobile/> : <NavDesktop/>}
    </div>
  )
}

export default Header