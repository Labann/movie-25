import * as express from "express";
import prisma from "../utils/prisma.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import type { User } from "@prisma/client";
import { checkUser } from "../utils/checkUser.js";


export const sign_up: express.RequestHandler = async (req, res) => {
    const {email, password}: User = req.body;
    try {
        if(!email || !password) return res.status(400).json({
            error: "bad request"
        })

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(user) return res.status(400).json({
            error: "user already exists"
        })

        

        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: passwordHashed,
            }
        })

        const token = jwt.sign({userId: newUser.id}, process.env.JWT_SECRET!, {expiresIn: "15d"}) 
        res.cookie("token", token, {
            httpOnly: true, //prevents access from js
            maxAge: 24 * 15 * 60 * 60 * 1000, //expire time
            secure: process.env.NODE_ENV === "development", //allows it to be accessed over https only
            sameSite: "none" //prevents against CRSF attacks
        });

        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}
export const login: express.RequestHandler = async (req, res) => {
    const {email, password}: User = req.body
    try{
        if(!email || !password) return res.status(400).json({
            error: "bad request"
        })

        //check if user exist
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(!user) return res.status(404).json({
            error: "user not found"
        })

        if(user.password){
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) return res.status(400).json({
                error: "password must match"
            })
        }
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!, {expiresIn: "15d"}) 
        res.cookie("token", token, {
            httpOnly: true, //prevents access from js
            maxAge: 24 * 15 * 60 * 60 * 1000, //expire time
            secure: process.env.NODE_ENV === "development", //allows it to be accessed over https only
            sameSite: "none" //prevents against CRSF attacks
        });

        return res.status(200).json(user);
    }catch(error){
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const logout: express.RequestHandler = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true, //prevents access from js
            secure: process.env.NODE_ENV === "development", //allows it to be accessed over https only
            sameSite: "none"
        })

        return res.status(200).json({
            message: "logged out successfully"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const redirectForGoogleAuth: express.RequestHandler = async (req, res) => {
    try {
        const user = req.user as User
        checkUser(user);
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!, {expiresIn: "15d"}) 
        res.cookie("token", token, {
            httpOnly: true, //prevents access from js
            maxAge: 24 * 15 * 60 * 60 * 1000, //expire time
            secure: process.env.NODE_ENV === "development", //allows it to be accessed over https only
            sameSite: "none" //prevents against CRSF attacks
        });
        res.redirect(`${process.env.CLIENT_URL!}/home/?token=${token}`);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


