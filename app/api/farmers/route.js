import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { address, contact, email, name, notes, payment, phone, isActive, profileImageUrl } = await req.json()
        const newFarmer = { address, contact, email, name, notes, payment, phone, isActive, profileImageUrl }
        console.log(newFarmer)
        return NextResponse.json(newFarmer)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create farmers", error }, { status: 500 })

    }
}