import * as express from "express";
import { checkUser } from "../utils/checkUser.js";
import bcrypt from "bcryptjs";
import prisma from "../utils/prisma.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
export const updatePassword = async (req, res) => {
    const { password } = req.body;
    try {
        if (!password)
            return res.status(400).json({
                error: "bad request, password is required"
            });
        const user = req.user;
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
        });
        return res.status(200).json(newUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const updateProfile = async (req, res) => {
    const { email } = req.body;
    const file = req.file;
    let profilePic;
    try {
        const user = req.user;
        checkUser(user);
        console.log(file);
        if (file) {
            profilePic = await uploadToCloudinary(file.buffer, { folder: "profile_pic" });
        }
        console.log(profilePic);
        const updatedUser = await prisma.user.update({
            where: {
                email: user.email
            },
            data: {
                email: email ?? user.email,
                profilePic: profilePic?.secure_url ?? user.profilePic
            }
        });
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=user.js.map