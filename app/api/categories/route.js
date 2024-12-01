import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, slug, description, imageUrl, isActive } = await req.json()
        const existingCategory = await db.category.findUnique({ where: { slug } })
        if (existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Category already exists"
            }, { status: 409 })
        }
        const newCategory = await db.category.create({
            data: { title, slug, description, imageUrl, isActive }
        })
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create category", error }, { status: 500 })

    }
}

export async function GET(req) {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(categories)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch category",
            error
        }, { status: 500 })
    }
}