import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { postSchema,postUpdateSchema } from "@abd766/medium-blogg";

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

    const authorizationHeader = c.req.header("authorization") || "";
    try {
        if (!authorizationHeader || typeof authorizationHeader !== "string") {
            return c.json({
                message: "Incorrect authorization Header"
            })
        }
        const token = authorizationHeader.split(" ")[1];
        const valid = await verify(token, c.env.JWT_SECRET) as { id: string };
        if (!valid) {
            c.json({
                message: "Invalid user"
            })
        }
        c.set("userId", valid.id)
        await next();
    } catch (e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
})


blogRouter.post("/", async (c) => {
    try {
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
    }
    catch (error: any) {
        return c.json(
            {
                message: "Error while Posting",
                error: error.message,
            },
            400
        );
    }
})


blogRouter.put("/", async (c) => {
    try {
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
    } catch (error: any) {
        return c.json(
            {
                message: "Error while Updating",
                error: error.message,
            },
            400
        );
    }
})

blogRouter.get("/bulk", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const blogs = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blogs
        });
    } catch (error: any) {
        return c.json(
            {
                message: "Error while All posts",
                error: error.message,
            },
            400
        );
    }
});

blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        
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
    } catch (error: any) {
        return c.json(
            {
                message: `Error whiel getting post with id : ${id}`,
                error: error.message,
            },
            400
        );
    }
})


