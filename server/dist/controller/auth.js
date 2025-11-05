import * as express from "express";
import prisma from "../utils/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const sign_up = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password)
            return res.status(400).json({
                error: "bad request"
            });
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (user)
            return res.status(400).json({
                error: "user already exists"
            });
        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: passwordHashed,
            }
        });
        return res.status(201).json(newUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password)
            return res.status(400).json({
                error: "bad request"
            });
        //check if user exist
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user)
            return res.status(404).json({
                error: "user not found"
            });
        if (user.password) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    error: "password must match"
                });
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "15d" });
        res.cookie("token", token, {
            httpOnly: true, //prevents access from js
            maxAge: 24 * 15 * 60 * 60 * 1000, //expire time
            secure: true, //allows it to be accessed over https only
            sameSite: "strict" //prevents against CRSF attacks
        });
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=auth.js.map