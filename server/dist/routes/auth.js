import * as express from "express";
import { login, logout, redirectForGoogleAuth, sign_up } from "../controller/auth.js";
import passport from "passport";
const router = express.Router();
router.post("/v1/login", login);
router.post("/v1/sign_up", sign_up);
router.post("/logout", logout);
router.get("/v2/login/", passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false
}));
router.get("/v2/login/callback", passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/failed`,
    session: false
}), redirectForGoogleAuth);
export default router;
//# sourceMappingURL=auth.js.map