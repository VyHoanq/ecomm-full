export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password, role } = body;
        const existingUser = await db.user.findUnique({ where: { email }, });
        if (existingUser) {
            return NextResponse.json({ data: null, message: "User already exists" }, { status: 409 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
            data: { name, email, password: hashedPassword, role },
        });
        console.log(newUser);
        return NextResponse.json({ data: newUser, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Server Error: Something went wrong", error }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const users = await db.user.findMany({
            orderBy: { createdAt: "desc" }
        })
        return NextResponse.json(users)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch user",
            error
        }, { status: 500 })
    }
}