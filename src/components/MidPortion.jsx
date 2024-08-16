import React from 'react'

const MidPortion = ({title, img_lg, img_sm, desc, btnColor, reversed}) => {
  return (
    <div className={`w-full flex  ${reversed ? "flex-row-reverse max-md:flex-col-reverse" : "max-md:flex-col-reverse"}`}>
        <div className="flex w-[50%] max-md:w-[100%] justify-center items-center">
            <div className='w-[28rem] flex flex-col gap-12 max-md:scale-100 max-lg:scale-90 max-md:py-24 max-md:text-center'>
            <h1 className="text-5xl text-[#283241] fraunces-bold">{title}</h1>
            <p className="text-gray-500 text-lg leading-7 font-barlow">{desc}</p>
            <h6 className={`fraunces-bold text-xl cursor-pointer edit-heading-${btnColor} max-md:before:-translate-x-1/2 max-md:before:left-1/2`}>LEARN MORE</h6>
            </div>
        </div>
      <img src={img_lg} className='w-[50%] max-md:hidden' alt="" />
      <img src={img_sm} className='w-[100%] md:hidden' alt="" />
    </div>
  )
}

export default MidPortion
