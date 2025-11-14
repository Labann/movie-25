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
        style={{backgroundImage: `url(${ImgUrl}original${movie?.poster_path})`}}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
            <div className="h-[500px] max-w-7xl mx-auto">
                <ReactPlayer
                    width={'100%'}
                    height='100%'
                    controls
                    playing
                    className='w-fit border border-gray-light rounded-md'
                    url={`https://www.youtube.com/watch?v=${movie_on_view[0]?.key}`}
                />
                 <span className="flex items-center space-x-2">
              <h3 className="text-sm  text-gray-light">Movie title: </h3>
              <h1 className="text-4xl ">{movie?.original_title}</h1>
          </span>
        <span className="flex items-center space-x-2">
            <h3 className="text-sm  text-gray-light">Genres: </h3>
            <span className="flex items-center space-x-4">
                {movie?.genres?.map(genre => <h1 className="text-3xl " key={genre.id}>{genre?.name}</h1>)}
            </span>
        </span>
        <span className="flex flex-col space-x-2">
            <h3 className="text-sm  text-gray-light">Overview: </h3>
            <span className="text-3xl font-extralight">
                {movie?.overview}
            </span>
        </span>
        <span className="flex items-center text-2xl text-slate-300 space-x-4">
            {movie?.adult? <p className="">PG 13 ||</p>: <p>PG 18 ||</p>} 
            <p>{movie?.release_date}</p>                        
        </span>
            </div>
            
        
    </div>
  )
}

export default Screen