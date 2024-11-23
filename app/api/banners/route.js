import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, link, imageUrl } = await req.json()
        const newBanner = { title, link, imageUrl }
        console.log(newBanner)
        return NextResponse.json(newBanner)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create banner", error }, { status: 500 })

    }
}