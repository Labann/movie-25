import React from 'react'
import Image from 'next/image'

const Actor = ({name}: {name: string}) => {
  return (
    <div className="w-[9em] p-2 flex-col text-center space-y-2">
            <Image 
              src={"/thumbnail.png"}
              alt='thumbnail'
              width={100}
              height={100}
              className='rounded-full w-[7em] h-[7em] mx-auto'
              />          
              <p className='text-gray-light text-sm'>{name}</p>  
          </div>
  )
}

export default Actor