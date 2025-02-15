import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { z } from "zod";
import { verify } from "hono/jwt";

// Schemas
const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});

const updateBlogInput = z.object({
    id: z.number(),
    title: z.string().optional(),
    content: z.string().optional()
});

const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});

const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
});

// Types
// export type SignupInput = z.infer<typeof signupInput>;
// export type SigninInput = z.infer<typeof signinInput>;
// export type CreateBlogInput = z.infer<typeof createBlogInput>;
// export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

// Router
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

// Middleware for authentication
blogRouter.use("/*", async (c, next) => {
    const authorizationHeader = c.req.header("authorization") || "";
    try {
        if (!authorizationHeader || typeof authorizationHeader !== "string") {
            return c.json({
                message: "Incorrect authorization header"
            }, 403);
        }
        const token = authorizationHeader.split(" ")[1];
        const user = await verify(token, c.env.JWT_SECRET) as { id: string };
        if (!user) {
            return c.json({
                message: "Invalid user"
            }, 403);
        }
        c.set("userId", user.id);
        await next();
    } catch (e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        });
    }
});

// Create a new post
blogRouter.post("/", async (c) => {
    const body = await c.req.json();
    const { success, error } = createBlogInput.safeParse(body);
    if (!success) {
        return c.json({
            message: "Invalid post format entries"
        }, 403);
    }

    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const newPost = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }
    });

    return c.json({
        id: newPost.id,
        message: "Post created successfully"
    }, 200);
});

// Update an existing post
blogRouter.put("/", async (c) => {
    const body = await c.req.json();
    const { success, error } = updateBlogInput.safeParse(body);
    if (!success) {
        return c.json({
            message: "Invalid post id format"
        }, 403);
    }

    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const updated = await prisma.post.update({
            where: {
                id: body.id,
                authorId: Number(authorId)
            },
            data: {
                title: body.title,
                content: body.content
            }
        });

        return c.json({
            message: "Post updated successfully"
        }, 200);
    } catch (e) {
        return c.json({
            message: `No post was found with this ${body.id}`
        }, 404);
    }
});

// Get a specific post by ID
blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    if (!post) {
        return c.json({
            message: `No post exists with such id: ${id}`
        }, 404);
    }

    return c.json({
        post
    }, 200);
});

// Get multiple posts
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
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
    });

    return c.json({
        blogs
    });
});
