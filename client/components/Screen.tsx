"use client"
import  { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ImgUrl } from '@/app/util/config';
import { fetch_movie_on_view } from '@/app/store/movieSlice';
import dynamic from "next/dynamic";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

//Dynamically import ReactPlayer to fix typing + SSR
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as unknown as React.FC<{
  src: string;
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
            <div className="md:h-[500px] h-[300px] max-w-7xl mx-auto">
                 <MediaController
                    style={{
                        width: "100%",
                        aspectRatio: "16/9",
                    }}
                    >
                        <ReactPlayer
                            width={'100%'}
                            height='100%'
                            controls={true}
                            playing={true}
                            className='w-fit border border-gray-light rounded-md'
                            src={`https://www.youtube.com/watch?v=${movie_on_view[0]?.key}`}
                        />
                </MediaController>
                <MediaControlBar className='flex space-x-2 items-center'>
                <MediaPlayButton />
                    <MediaSeekBackwardButton seekOffset={10} />
                    <MediaSeekForwardButton seekOffset={10} />
                    <MediaTimeRange />
                    <MediaTimeDisplay showDuration />
                <MediaMuteButton />
                    <MediaVolumeRange />
                    <MediaPlaybackRateButton />
                    <MediaFullscreenButton />
                </MediaControlBar>
        </div>
    </div>
  )
}

export default Screen