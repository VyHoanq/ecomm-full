import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, slug, categoryId, description, imageUrl, content, isActive } = await req.json()
        const newTraining = { title, slug, categoryId, description, imageUrl, content, isActive }
        console.log(newTraining)
        return NextResponse.json(newTraining)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create trainings", error }, { status: 500 })

    }
}