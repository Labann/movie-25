import React from 'react'
import Image from 'next/image'
const Offers = () => {
  return (
    <div className="p-4 bg-primary min-h-[50vh] py-10">
       <div className='max-w-7xl mx-auto'>
          <div className="">
              <h3 className='text-white font-bold text-xl text-center'>What we offer</h3>
              <div className="grid grid-cols-2 w-fit md:w-auto mx-auto md:grid-cols-4 gap-4 space-x-2 py-6">
                <div className="w-fit">
                  <Image
                    src={"/card_img.jpg"}
                    alt='card_img'
                    width={250}
                    height={250}
                    className='rounded-md'
                  />
                  <div className="text-center text-gray-light font-bold py-3">Movies</div>
                </div>
                <div className="w-fit">
                  <Image
                    src={"/card_img.jpg"}
                    alt='card_img'
                    width={250}
                    height={250}
                    className='rounded-md'
                  />
                  <div className="text-center text-gray-light font-bold py-3">Series</div>
                </div>
                <div className="w-fit">
                  <Image
                    src={"/card_img.jpg"}
                    alt='card_img'
                    width={250}
                    height={250}
                    className='rounded-md'
                  />
                  <div className="text-center text-gray-light font-bold py-3">Animation</div>
                </div>
                <div className="w-fit">
                  <Image
                    src={"/card_img.jpg"}
                    alt='card_img'
                    width={250}
                    height={250}
                    className='rounded-md'
                  />
                  <div className="text-center text-gray-light font-bold py-3">Documentaries</div>
                </div>
              </div>
          </div>
      </div>
    </div>
   
  )
}

export default Offers