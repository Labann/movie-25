import React from 'react'
import Image from 'next/image'
const OfferCard = ({title}: {title: string}) => {
  return (
    <div className="w-fit">
          <Image
            src={"/card_img.jpg"}
            alt='card_img'
            width={250}
            height={250}
            className='rounded-md'
          />
          <div className="text-center text-gray-light font-bold py-3">{title}</div>
        </div>
  )
}

export default OfferCard