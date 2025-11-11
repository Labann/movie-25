"use client"
import React from 'react'
import Actor from './Actor'
const Actors = ({title}: {title: string}) => {
  return (
    <div className='max-w-7xl mx-auto pb-14 pt-3'>
      <h3 className='text-2xl text-white capitalize'>{title}</h3>
      <div className="w-[50vw] overflow-x-scroll scroll-none mx-auto">
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