import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { userSchema,signinSchema } from "@abd766/medium-blogg";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();



userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const valid = userSchema.safeParse(body);
        if (!valid) {
            return c.json({
                message: "Invalid entries' format",
            });
        }
        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: body.password,
            },
        });
        if (!user) {
            return c.json({
                message: "Cannot create User",
            });
        }
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            token: token,
            message: "Signup Successfull",
        });
    } catch (error: any) {
        return c.json(
            {
                message: "Error while Signup",
                error: error.message,
            },
            400
        );
    }
});

userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {

        const body = await c.req.json();
        const valid = signinSchema.safeParse(c.req.json())
        if (!valid) {
            c.json(
                {
                    message: "Invalid entries' format for signin",
                },
                400
            );
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });
        if (!existingUser || existingUser.password !== body.password) {
            return c.json(
                {
                    message: "User does not exits please Signup or Password is incorrect",
                },
                401
            );
        }
        const token = await sign({ id: existingUser.id }, c.env.JWT_SECRET);
        return c.json({
            token: token,
            message: "User Signed in Successfully",
        });
    } catch (error) {
        return c.json(
            {
                message: `Error occured while signin : ${error}`,
            },
            500
        );
    }
});
