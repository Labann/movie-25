"use client"
import React, { useEffect } from 'react'
import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ImgUrl } from '@/app/util/config';
import { fetch_movie_on_view } from '@/app/store/movieSlice';
const Screen = ({movie_id}: {movie_id: string}) => {
    const {movie, movie_on_view} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetch_movie_on_view({movie_id}))
    }, [movie_id, dispatch])
    return (
    <div className='w-full relative pt-34 min-h-[70vh] bg-cover bg-center' style={{backgroundImage: `url(${ImgUrl}w700${movie?.poster_path})`}}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
        
        <ReactPlayer className='w-full max-w-7xl mx-auto' src={`https://www.youtube.com/watch?v=${movie_on_view?.key}`} controls />
        
    </div>
  )
}

export default Screen