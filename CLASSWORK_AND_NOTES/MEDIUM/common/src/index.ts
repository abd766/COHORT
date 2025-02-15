import { z } from "zod"
export const userSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string(),
});


export const signinSchema = z.object({
    email: z.string(),
    password: z.string()
})

export const postSchema = z.object({
    title: z.string(),
    content: z.string()
})

export const postUpdateSchema = z.object({
    id: z.number(),
    title: z.string().optional(),
    content: z.string().optional()
})


export type UserSchema = z.infer<typeof userSchema>;
export type SigninSchema = z.infer<typeof signinSchema>;
export type PostSchema = z.infer<typeof postSchema>;
export type PostUpdateSchema = z.infer<typeof postUpdateSchema>;