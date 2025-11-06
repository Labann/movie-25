import * as express from "express"
import { protect } from "../middleware/protect.js";
import { updatePassword, updateProfile } from "../controller/user.js";
import upload from "../utils/upload.js";


const router = express.Router();

router.patch("/profile_update", protect, upload.single("profilePic"), updateProfile);
router.patch("/profile/change_password", protect, updatePassword);
export default router;