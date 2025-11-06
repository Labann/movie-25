import * as express from "express";
import { protect } from "../middleware/protect.js";
import { discoverAction, discoverAnimations, discoverDocumentaries, discoverDrama, discoverHorror, discoverScienceFictions } from "../controller/discover.js";
const router = express.Router();
router.get("/action", protect, discoverAction);
router.get("/animation", protect, discoverAnimations);
router.get("/documentaries", protect, discoverDocumentaries);
router.get("/drama", protect, discoverDrama);
router.get("/horror", protect, discoverHorror);
router.get("/scienceFiction", protect, discoverScienceFictions);
export default router;
//# sourceMappingURL=discover.js.map