import React from 'react'
import OfferCard from './OfferCard'
const Offers = () => {
  return (
    <div className="p-4 bg-primary min-h-[50vh] pt-10">
       <div className='max-w-7xl mx-auto'>
          <div className="">
              <h3 className='text-white font-bold text-xl text-center'>What we offer</h3>
              <div className="grid grid-cols-2 w-fit md:w-auto mx-auto md:grid-cols-4 gap-4 space-x-2 py-6">
                <OfferCard title="Movie" img={"/movie.jpg"}/>
                <OfferCard title='Series' img={"/series.jpg"}/>
                <OfferCard title='Animation' img={"/animation.jpg"}/>
                <OfferCard title="Documentaries" img={"/documentary.jpg"}/>
              </div>
          </div>
          
      </div>
    </div>
   
  )
}

export default Offers