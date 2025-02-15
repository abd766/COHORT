"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdateSchema = exports.postSchema = exports.signinSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().optional(),
    password: zod_1.z.string(),
});
exports.signinSchema = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.postSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.postUpdateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional()
});
