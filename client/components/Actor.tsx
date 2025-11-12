import React from 'react'
import Image from 'next/image'
import { ImgUrl } from '@/app/util/config'


export const ActorLoader = () => {
  return (
    <div className='w-[9em] p-1'>
      <div className="bg-gray-light w-full rounded-full animate-pulse"></div>
      <div className="w-3/4 mx-auto bg-gray-light pt-2 animate-pulse"></div>
      </div>
  )
}
const Actor = ({name, img}: {name: string, img: string}) => {
  return (
    <div className="w-[9em] p-2 flex-col text-center space-y-2">
            {img && <Image 
              src={`${ImgUrl}/w-600/${img}`}
              alt='thumbnail'
              width={100}
              height={100}
              className='rounded-full w-[7em] h-[7em] mx-auto'
              />}          
              <p className='text-gray-light text-sm'>{name}</p>  
          </div>
  )
}

export default Actor