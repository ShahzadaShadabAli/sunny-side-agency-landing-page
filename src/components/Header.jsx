import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='flex flex-col items-center relative'>
        <Navbar />
        <h1 className='text-7xl max-sm:text-4xl animate-fade-down text-center fraunces-bold mt-24 tracking-[0.2em] font-bold text-white'>WE ARE CREATIVES</h1>
        <img src="/images/icon-arrow-down.svg" className='mt-24 animate-fade-up' width="45px" alt="" />
      <img src="/images/desktop/image-header.jpg" className='h-screen w-full absolute object-cover main-img max-md:hidden' alt="" />
      <img src="/images/mobile/image-header.jpg" className='h-screen w-full absolute object-cover main-img md:hidden' alt="" />
    </header>
  )
}

export default Header
