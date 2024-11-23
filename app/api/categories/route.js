import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, slug, description, imageUrl } = await req.json()
        const newCategory = { title, slug, description, imageUrl }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create category", error }, { status: 500 })

    }
}