"use server";
import { NextResponse } from "next/server";
import client from "@/db";

export async function solve(username: string, password: string) {
    try {
        await client.user.create({
            data: { username, password }
        });
        return { message: "User created successfully" };
    } catch (err) {
        return { message: "User creation failed" };;
    }
}
