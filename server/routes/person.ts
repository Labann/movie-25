import * as express from "express"
import { fetchFamousActor } from "../controller/person.js";


const router = express.Router();

router.get("/famous", fetchFamousActor);
export default router;