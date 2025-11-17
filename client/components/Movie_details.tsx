"use client"
import { useEffect } from 'react'
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { LiaIconsSolid } from "react-icons/lia";
import { GoStarFill } from "react-icons/go";
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { fetchMovieDetails } from '@/app/store/movieSlice';


const Movie_details = ({movie_id}: {movie_id: string}) => {
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movie);
    useEffect(() => {
        dispatch(fetchMovieDetails({movie_id}))
    }, [movie_id, dispatch])
   
  return (
    <div className="bg-primary pt-4">
        <div className='mx-auto max-w-7xl p-4'>
            <h3 className='text-gray-semibold'>More details</h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-md">
                        <IoCalendarClearOutline className=' font-semibold'/>
                        <p className='capitalized'>Released Year</p>
                    </div>
                    <p className='text-white font-extralight'>{movie?.release_date.slice(0, 4)}</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-md">
                        <IoLanguageOutline className=' font-semibold'/>
                        <p className='capitalized'>Available languages</p>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        {<span className='bg-black rounded-md px-3 py-1 cursor-pointer text-sm'>{movie?.original_language}</span>} 
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-md">
                        <LiaIconsSolid className=' font-semibold'/>
                        <p className='capitalized text-md'>Genres</p>
                    </div>
                    <div className="flex items-center flex-wrap space-y-2 space-x-2 text-white">
                        {movie?.genres?.map(genre => <span key={genre.id} className='bg-black text-sm rounded-md px-3 py-1 cursor-pointer'>{genre.name}</span>)}
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-md">
                        <GoStarFill className=''/>
                        <p className='capitalized text-md'>Popularity</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className='text-xs text-gray-light'>rating</span>
                        <span className='text-white text-sm'>{movie?.popularity}</span>
                    </div>
                </div>

            </div>            
        </div>
    </div>
    
  )
}

export default Movie_details