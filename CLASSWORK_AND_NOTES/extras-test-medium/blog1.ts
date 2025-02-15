import { Hono } from "hono";
import app from "../backend/src";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { number, z } from "zod";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) => {

    const authorizationHeader = c.req.header("Authorization") || "";
    try {
        if (!authorizationHeader || typeof authorizationHeader !== "string") {
            return c.json({
                message: "Incorrect authorization Header"
            })
        }
        const token = authorizationHeader.split(" ")[1];
        const valid = await verify(token, c.env.JWT_SECRET);
        if (!valid) {
            c.json({
                message: "Invalid user"
            })
        }
        c.set("userId", token)
        await next();
    } catch (e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
})

const postSchema = z.object({
    title: z.string(),
    content: z.string()
})

blogRouter.post("/", async (c) => {
    const body = await c.req.json();
    const validPost = postSchema.safeParse(body);
    if (!validPost) {
        return c.json({
            message: "Invalid post format entries"
        }, 403)
    }
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    

    const newPost = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }
    })
    return c.json({
        id: newPost.id,
        message: "Post created successfully"
    }, 200)
})

const postUpdateSchema = z.object({
    id: z.number(),
    title: z.string().optional(),
    content: z.string().optional()
})
blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const authorId = c.get("userId")
    const body = await c.req.json();
    const valid = postUpdateSchema.safeParse(body);
    if (!valid) {
        return c.json({
            message: "Invalid post id format"
        }, 403)
    }
    // const post = await prisma.post.findFirst({
    //     where:{
    //         id: body.id
    //     }
    // })
    // if(!post){
    //     return c.json({
    //         message: `No post found with this ${body.id}`
    //     },404)
    // }
    const updated = await prisma.post.update({
        where: {
            id: body.id,
            authorId: Number(authorId)
        }, data: {
            title: body.title,
            content: body.content
        }
    })
    if (!updated) {
        return c.json({
            message: `No post was found with this ${body.id}`
        }, 403)
    }
    return c.json({
        message: "Post Updated Successfully"
    }, 200)
})


blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param("id");
    const post = await prisma.post.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            title: true,
            content: true
        }
    })
    if (!post) {
        return c.json({
            message: `No post exists with such id : ${id}`
        }, 404)
    }
    return c.json({
        post
    }, 200)
})
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    // const authorId = c.get("jwtPayload");
    // const blogs = await prisma.user.findUnique({
    //     where: {
    //         id: authorId
    //     },
    //     select: {
    //         posts: true
    //     }
    // })
    const blogs = await prisma.post.findFirst({})
    return c.json({
        blogs
    });
});

