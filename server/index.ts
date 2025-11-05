import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import authRoutes from "./routes/auth.js"
import passport from "passport";
import "dotenv/config"
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "./utils/prisma.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors())

app.use(cookieParser());
app.use(express.urlencoded({extended: true, limit: "30mb"}));
app.use(express.json({limit: "30mb"}));

dotenv.config();

/*
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    callbackURL: `${process.env.SERVER_URL}/api/user/v2/login/callback`,
}, async (accessToken, refreshToken, profile, done) => {
    
    const email = profile.emails?.[0]?.value
    const profilePic = profile.photos?.[0]?.value
    if(!email){
        return done(new Error("email not available"));
    }

    let user = await prisma.user.findUnique({
        where:{
            email: email as string
        }
    });
    
    //sign-up proxy
    if(!user){
        user = await prisma.user.create({
            data:{
                email: email,
                profilePic: profilePic || null
            }
        })
    }

    //login
    done(null, user);
}
))
*/
const port = process.env.PORT || 3030

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`app running on port: ${port}`));
app.get("/", (req, res) => {
    res.send(`app running on port ${port}`);
})