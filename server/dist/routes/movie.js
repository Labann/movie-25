import * as express from "express";
import { protect } from "../middleware/protect.js";
import { fetchMovieDetails } from "../controller/movie.js";
const router = express.Router();
router.get("/:movie_id", protect, fetchMovieDetails);
export default router;
//# sourceMappingURL=movie.js.map