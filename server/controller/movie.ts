import * as express from "express"

export const fetchMovieDetails:express.RequestHandler = async (req, res) => {
    const {movie_id} = req.params;
    try {
        if(!movie_id) return res.status(400).json({
            error: 'bad request'
        })

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN!}`
            }
        });

        const data = await response.json();

        if(data.status_message){
            throw Error(data.status_message);
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
} 


export const fetchMovieCast: express.RequestHandler = async (req, res) => {
    const {movie_id} = req.params;
    try {
        if(!movie_id) return res.status(400).json({
            error: "bad request"
        })

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN!}`
            },
            credentials: "include"
        })

        const data = await response.json();

        if(data.status_message){
            throw Error(data.status_message);
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}

export const fetchTrending: express.RequestHandler = async (req, res) => {
    try {
        const result = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN!}`
            },
            credentials: "include"
        })

        const data = await result.json();

        if(data.status_message){
            throw Error(data.status_message);
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const fetchPopular: express.RequestHandler = async (req, res) => {
    try {
        const result = await fetch(`'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                method: "GET",
                headers: {
                    "Content-type":"application/json",
                    "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN!}`
                },
                credentials: "include"           
        })

        const data = await result.json();

        if(data.status_message){
            throw Error(data.status_message);
        }

        return res.status(200).json(data);
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const movie_on_view: express.RequestHandler = async (req, res) => {
    const {movie_id} = req.params;
    try {
        if(!movie_id) return res.status(400).json({
            error: "bad request"
        })
        const results = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.API_ACCESS_TOKEN}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `${process.env.API_ACCESS_TOKEN}`
            },
            credentials: "include"
        })

        const data = await results.json();

         if(data.status_message){
            throw Error(data.status_message);
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}