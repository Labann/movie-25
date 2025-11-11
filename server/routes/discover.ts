import * as express from "express"
import { protect } from "../middleware/protect.js";
import { discoverAction, discoverAnimations, discoverDocumentaries, discoverDrama, discoverHorror, discoverScienceFictions, discoverSeries } from "../controller/discover.js";


const router = express.Router();

router.get("/action",  discoverAction);
router.get("/animation",  discoverAnimations);
router.get("/documentaries",  discoverDocumentaries);
router.get("/drama",  discoverDrama);
router.get("/horror",  discoverHorror);
router.get("/scienceFiction",  discoverScienceFictions);
router.get("/series",  discoverSeries);
export default router;