import React from 'react'
import OfferCard from './OfferCard'
const Offers = () => {
  return (
    <div className="p-4 bg-primary pt-10">
       <div className='max-w-7xl mx-auto'>
              <h3 className='text-white font-bold text-lg lowercase text-center'>What we offer</h3>
              <div className="grid grid-cols-2 w-fit md:w-auto mx-auto md:grid-cols-4 gap-4 space-x-2 py-6">
                <OfferCard title="Movie" img={"/movie.jpg"}/>
                <OfferCard title='Drama' img={"/series.jpg"}/>
                <OfferCard title='Animation' img={"/animation.jpg"}/>
                <OfferCard title="Documentaries" img={"/documentary.jpg"}/>
              </div>
      </div>
    </div>
   
  )
}

export default Offers