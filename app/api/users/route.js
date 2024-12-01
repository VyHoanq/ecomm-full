import db from "@/lib/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

export default async function POST(req) {
    try {
        const { name, email, password } = await req.json()
        const existingUser = await db.user.findUnique({
            where: { email }
        })
        if (existingUser) {
            return NextResponse.json({
                data: null, message: "User Aldreay exists"
            }, { status: 409 })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
            data: { name, email, password: hashedPassword }
        })
        console.log(newUser)
        return NextResponse.json(newUser)
    } catch (error) {
        console.log(error)
        return NextResponse.json({

            message: "Failed to create a user", error
        }, { status: 500 })
    }
}