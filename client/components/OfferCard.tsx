import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const OfferCard = ({title, img}: {title: string, img: string}) => {
  return (
    <Link href={`/discover/${title}`} className="w-fit">
          <div className="overflow-hidden mx-auto">
            <Image
              src={img}
              alt='card_img'
              width={250}
              height={250}
              className='rounded-md h-[18em] object-fit object-center hover:scale-105 cursor-pointer'
            />
          </div>
          <div className="text-center text-sm text-gray-light font-bold">{title}</div>
        </Link>
  )
}

export default OfferCard