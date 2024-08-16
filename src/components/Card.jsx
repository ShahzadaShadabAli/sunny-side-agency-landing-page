import React from 'react'

const Card = ({img, comment, occupation, name}) => {
  return (
      <div className="flex flex-col items-center justify-center gap-16 max-md:gap-4 max-md:my-12 px-4 text-center">
          <img
            src={img}
            className="rounded-full"
            width={70}
            alt=""
          />
          <p className="text-gray-600 text-xl leading-8 font-barlow">
            {comment}
          </p>
          <div className="text-center space-y-2">
            <h1 className="fraunces-bold text-2xl text-[#283241]">{name}</h1>
            <p className="text-gray-400 font-barlow text-lg">
              {occupation}
            </p>
          </div>
        </div>
  )
}

export default Card
