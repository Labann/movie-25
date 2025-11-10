import React from 'react'
import Card from './Card'

const SlideShow = ({title}: {
  title: string
}) => {
  return (
    <div className='p-4 max-w-7xl mx-auto pb-14 pt-6'>
        <h3 className='font-bold text-2xl text-white capitalize pb-2'>{title}</h3>
        <div className="overflow-x-scroll scroll-none w-[50w] mx-auto">
            <div className="flex items-center space-x-4 w-fit">
                {["1", "2", "3", "4", "5", "6", "7"].map(item => 
                <Card key={item}/>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default SlideShow