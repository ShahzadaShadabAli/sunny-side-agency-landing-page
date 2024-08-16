import React from 'react'

const AttrOne = () => {
  return (
    <div className='relative flex-1'>
      <img src="/images/desktop/image-graphic-design.jpg" className='max-sm:hidden' width="100%" alt="" />
      <img src="/images/mobile/image-graphic-design.jpg" className='sm:hidden' width="100%" alt="" />
      <div className='w-[50%]  max-lg:w-[70%] max-lg:bottom-8 text-center space-y-8 text-[#25564b] absolute bottom-16 left-1/2 -translate-x-1/2'>
        <h1 className='fraunces-bold text-4xl max-sm:text-2xl'>Graphic Design</h1>
        <p className="text-lg leading-7 font-barlow max-sm:text-sm">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
      </div>
    </div>
  )
}

export default AttrOne
