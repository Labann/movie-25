"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Discover = () => {
  const {id} = useParams<{id: string}>()
    return (
    <div className='min-h-screen'>Discover {id}</div>
  )
}

export default Discover