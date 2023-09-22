import React from 'react'
import { useState, useEffect } from 'react';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const Footer = () => {
const [width, setWindowWidth] = useState(0);
  const breakpointMobileSize = 1352
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
        {width < breakpointMobileSize ? <FooterMobile/> : <FooterDesktop/>}
    </div>
  )
}

export default Footer