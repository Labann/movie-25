import * as express from "express"
import { login, sign_up } from "../controller/auth.js";


const router = express.Router();

router.post("/v1/login", login);
router.post("/v1/sign_up", sign_up);

export default router;