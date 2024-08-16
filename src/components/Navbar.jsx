import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  useEffect(() => {
    if (isClicked) {
      const collapse = document.querySelector('.collapser')
      collapse.classList.replace('scale-0', 'scale-100')
    } else {
      const collapse = document.querySelector('.collapser')
      collapse.classList.replace('scale-100', 'scale-0')
    }
  }, [isClicked])
  return (
    <div className='flex justify-between items-center w-[92%] py-10 relative'>
      <h1 className='font-barlow text-5xl font-bold text-white'>sunnyside</h1>
      <ul className="flex text-white font-barlow text-xl gap-12 items-center max-md:hidden">
        <li className='cursor-pointer hover-effect'>About</li>
        <li className='cursor-pointer hover-effect'>Services</li>
        <li className='cursor-pointer hover-effect'>Projects</li>
        <li className='cursor-pointer'>
            <button className='bg-white text-black transition-[0.8s] hover:bg-[#FFFFFF70] hover:text-white fraunces-bold py-4 px-7 font-bold text-[18px] rounded-[100px]'>CONTACT</button>
        </li>
      </ul>
     <img src="/images/icon-hamburger.svg" onClick={() => setIsClicked((prev) => !prev)} className='md:hidden cursor-pointer' alt="" />
      <ul className="flex flex-col absolute z-50 scale-0 collapser w-[100%] top-32 p-10 text-gray-500 font-barlow text-xl gap-12 items-center bg-white md:hidden">
        <li className='cursor-pointer hover-effect-gray '>About</li>
        <li className='cursor-pointer hover-effect-gray'>Services</li>
        <li className='cursor-pointer hover-effect-gray'>Projects</li>
        <li className='cursor-pointer'>
            <button className='bg-yellow-300 text-black transition-[0.8s] hover:bg-[#FFFFFF70] border border-yellow-300 hover:text-yellow-300 fraunces-bold py-4 px-7 font-bold text-[18px] rounded-[100px]'>CONTACT</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
