import type { User } from "@prisma/client";
import * as express from "express"
import { checkUser } from "../utils/checkUser.js";
import bcrypt from "bcryptjs";
import prisma from "../utils/prisma.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";




export const updatePassword: express.RequestHandler = async (req, res) => {
    const {password}: {password: string} = req.body;
    try {
        if(!password) return res.status(400).json({
            error: "bad request, password is required"
        })

        const user = req.user as User

        checkUser(user);

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.update({
            where: {
                email: user.email
            },
            data: {
                password: passwordHash
            }
        })

        return res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}
export const updateProfile: express.RequestHandler = async (req, res) => {
    const {email}: User = req.body;
    const file = req.file as Express.Multer.File;
    let profilePic
    try {
        const user = req.user as User;

        checkUser(user);
        
        
        if(file){
            profilePic = req.file?.path;
        }

        
        const updatedUser = await prisma.user.update({
            where: {
                email: user.email
            },
            data: {
                email: email ?? user.email,
                profilePic: profilePic?? user.profilePic
            }
        })


        return res.status(200).json(updatedUser)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}