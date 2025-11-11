import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const OfferCard = ({title, img}: {title: string, img: string}) => {
  return (
    <Link href={`/discover/${title}`} className="w-fit">
          <Image
            src={img}
            alt='card_img'
            width={250}
            height={250}
            className='rounded-md h-[15em] object-fit hover:scale-105 cursor-pointer'
          />
          <div className="text-center text-gray-light font-bold py-3">{title}</div>
        </Link>
  )
}

export default OfferCard