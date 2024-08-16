import React from 'react'

const Gallery = () => {
  return (
    <div className='grid grid-cols-4 max-md:grid-cols-2'>
      <img src="/images/desktop/image-gallery-milkbottles.jpg" className='max-md:hidden' width="100%" alt="" />
      <img src="/images/mobile/image-gallery-milkbottles.jpg" className='md:hidden' width="100%" alt="" />
      <img src="/images/desktop/image-gallery-orange.jpg" className='max-md:hidden' width="100%" alt="" />
      <img src="/images/mobile/image-gallery-orange.jpg" className='md:hidden' width="100%" alt="" />
      <img src="/images/desktop/image-gallery-cone.jpg" className='max-md:hidden' width="100%" alt="" />
      <img src="/images/mobile/image-gallery-cone.jpg" className='md:hidden' width="100%" alt="" />
      <img src="/images/desktop/image-gallery-sugarcubes.jpg" className='max-md:hidden' width="100%" alt="" />
      <img src="/images/mobile/image-gallery-sugar-cubes.jpg" className='md:hidden' width="100%" alt="" />
    </div>
  )
}

export default Gallery
