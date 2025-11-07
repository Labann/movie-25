//search route;
import * as express from "express";
import { protect } from "../middleware/protect.js";
import { search } from "../controller/search.js";
const router = express.Router();
router.get("/:query", protect, search);
export default router;
//# sourceMappingURL=search.js.map