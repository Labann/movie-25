import prisma from "./prisma.js";
export const checkUser = async (user) => {
    const userExist = await prisma.user.findUnique({
        where: {
            email: user.email
        }
    });
    if (!userExist)
        throw Error("user does not exist");
};
//# sourceMappingURL=checkUser.js.map