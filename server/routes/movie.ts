import * as express from "express"
import { protect } from "../middleware/protect.js";
import { fetchMovieCast, fetchMovieDetails, fetchPopular, fetchTrending, movie_on_view, movie_reviews } from "../controller/movie.js";


const router = express.Router();

router.get("/details/:movie_id", fetchMovieDetails);
router.get("/cast/:movie_id", fetchMovieCast);
router.get("/trending", fetchTrending);
router.get("/popular", fetchPopular);
router.get("/on_view/:movie_id", movie_on_view)
router.get("/reviews/:movie_id", movie_reviews);
export default router;