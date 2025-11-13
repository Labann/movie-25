"use client"
import React, { useEffect } from 'react'
import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ImgUrl } from '@/app/util/config';
import { fetch_movie_on_view } from '@/app/store/movieSlice';
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
const Screen = ({movie_id}: {movie_id: string}) => {
    const {movie, movie_on_view} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetch_movie_on_view({movie_id}))
    }, [movie_id, dispatch])
    return (
    <div className='w-full relative pt-34 p-4 min-h-[70vh] bg-cover bg-center' style={{backgroundImage: `url(${ImgUrl}w700${movie?.poster_path})`}}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
        <div className="max-w-lg mx-auto">
            <MediaController
            style={{
                width: "100%",
                aspectRatio: "16/9",
            }}
                    >
            <ReactPlayer
                slot="media"
                src={`https://www.youtube.com/watch?v=${movie_on_view[0]?.key}`}
                controls={false}
                style={{
                width: "100%",
                height: "100%",
                }}
            ></ReactPlayer>
            <MediaControlBar>
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
            </MediaController>
        </div>
        
        
    </div>
  )
}

export default Screen