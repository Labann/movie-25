"use client"
import React from 'react'
import Actor from './Actor'
const Actors = () => {
  return (
    <div className='max-w-7xl mx-auto p-4 pb-14 pt-3'>
      <h3 className='text-2xl text-white capitalize'>Most Famous actor globally right now</h3>
      <div className="w-7xl overflow-x-scroll scroll-none mx-auto">
        <div className="flex items-center pt-3 space-x-3 w-fit">
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
          <Actor name='Dwayne Johnson'/>
        </div>
      </div>
    </div>
  )
}

export default Actors