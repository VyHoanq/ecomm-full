import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, link, imageUrl, isActive } = await req.json()
        const newBanner = await db.banner.create({
            data: { title, link, imageUrl, isActive }
        })
        console.log(newBanner)
        return NextResponse.json(newBanner)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create banner", error }, { status: 500 })

    }
}
export async function GET(req) {
    try {
        const banners = await db.banner.findMany({
            orderBy: {
                createdAt : "desc"
            }
        })
        return NextResponse.json(banners)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch banner",
            error
        }, { status: 500 })
    }
}