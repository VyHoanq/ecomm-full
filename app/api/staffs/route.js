export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { name, password, email, dob, nin, address, notes, contact, isActive } = await req.json()
        const NewStaff = { name, password, email, dob, nin, address, notes, contact, isActive }
        console.log(NewStaff)
        return NextResponse.json(NewStaff)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create staff", error }, { status: 500 })

    }
}