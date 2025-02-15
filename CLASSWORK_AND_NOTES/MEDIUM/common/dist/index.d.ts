import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const postSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const postUpdateSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
}, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
}>;
export type UserSchema = z.infer<typeof userSchema>;
export type SigninSchema = z.infer<typeof signinSchema>;
export type PostSchema = z.infer<typeof postSchema>;
export type PostUpdateSchema = z.infer<typeof postUpdateSchema>;
