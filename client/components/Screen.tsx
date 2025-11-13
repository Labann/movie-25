"use client"
import  { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ImgUrl } from '@/app/util/config';
import { fetch_movie_on_view } from '@/app/store/movieSlice';
import dynamic from "next/dynamic";


//Dynamically import ReactPlayer to fix typing + SSR
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as unknown as React.FC<{
  url: string;
  controls?: boolean;
  playing?: boolean
  width?: string;
  height?: string;
  className?: string
}>;


const Screen = ({movie_id}: {movie_id: string}) => {
    const {movie, movie_on_view} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetch_movie_on_view({movie_id}))
    }, [movie_id, dispatch])
    return (
    <div className='w-full relative pt-34 p-4 min-h-[70vh] bg-cover bg-center' 
        style={{backgroundImage: `url(${ImgUrl}w700${movie?.poster_path})`}}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
            
            <ReactPlayer
                width={'100%'}
                height='100%'
                controls={true}
                playing={true}
                url={`https://www.youtube.com/watch?v=${movie_on_view[0]?.key}`}
                className="max-w-7xl mx-auto"
        />
        
    </div>
  )
}

export default Screen