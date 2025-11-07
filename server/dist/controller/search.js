//search controller
import * as express from "express";
export const search = async (req, res) => {
    const { query } = req.params;
    try {
        if (!query)
            return res.status(400).json({
                error: "bad request, query is required"
            });
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
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
//# sourceMappingURL=search.js.map