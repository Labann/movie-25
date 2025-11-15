import React from 'react'
import RecentlyVisitedCard from './RecentlyVisitedCard'
const RecentlyVisited = () => {
  return (
    <div className="py-4">
        <h2 className='text-gray-light capitalize text-lg font-bold'>Recently visited</h2>
        <div className="grid grid-cols-3 gap-2 py-3 max-w-sm">
          <RecentlyVisitedCard />
          <RecentlyVisitedCard />
          <RecentlyVisitedCard />
        </div>
      </div>
  )
}

export default RecentlyVisited