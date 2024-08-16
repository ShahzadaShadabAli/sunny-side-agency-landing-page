import React from 'react'

const AttrTwo = () => {
  return (
    <div className='relative flex-1'>
      <img src="/images/desktop/image-photography.jpg" className='max-md:hidden' width="100%" alt="" />
      <img src="/images/mobile/image-photography.jpg" className='md:hidden' width="100%" alt="" />
      <div className='w-[50%] max-lg:w-[70%] max-lg:bottom-8 text-center space-y-8 text-[#206988] absolute bottom-16 left-1/2 -translate-x-1/2'>
        <h1 className='fraunces-bold text-4xl max-sm:text-2xl'>Photography</h1>
        <p className="text-lg leading-7 max-sm:text-sm font-barlow">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </div>
  )
}

export default AttrTwo
