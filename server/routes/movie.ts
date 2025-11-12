import * as express from "express"
import { protect } from "../middleware/protect.js";
import { fetchMovieCast, fetchMovieDetails, fetchTrending } from "../controller/movie.js";


const router = express.Router();

router.get("/:movie_id", fetchMovieDetails);
router.get("/cast/:movie_id", fetchMovieCast);
router.get("/trending", fetchTrending);
export default router;