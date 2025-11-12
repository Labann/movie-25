import * as express from "express";
export const fetchMovieDetails = async (req, res) => {
    const { movie_id } = req.params;
    try {
        if (!movie_id)
            return res.status(400).json({
                error: 'bad request'
            });
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN}`
            }
        });
        const data = await response.json();
        if (data.status_message) {
            throw Error(data.status_message);
        }
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const fetchMovieCast = async (req, res) => {
    const { movie_id } = req.params;
    try {
        if (!movie_id)
            return res.status(400).json({
                error: "bad request"
            });
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN}`
            },
            credentials: "include"
        });
        const data = await response.json();
        if (data.status_message) {
            throw Error(data.status_message);
        }
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const fetchTrending = async (req, res) => {
    try {
        const result = await fetch(`https://api.themoviedb.org/3/trending/all/week`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN}`
            },
            credentials: "include"
        });
        const data = await result.json();
        if (data.status_message) {
            throw Error(data.status_message);
        }
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=movie.js.map