import type {User} from "@prisma/client"
import prisma from "./prisma.js"

export const checkUser =  async (user: User) => {
    const userExist = await prisma.user.findUnique({
        where: {
            email: user.email
        }
    })

    if(!userExist) throw Error("user does not exist")
    
}