import * as express from "express"

export const fetchFamousActor: express.RequestHandler = async (req, res) => {
    try {
        const results = await fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${process.env.API_ACCESS_TOKEN!}`
            }
        })

        const data = await results.json()

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