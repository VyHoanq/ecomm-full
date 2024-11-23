import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, couponCode, expiryDate } = await req.json()
        const newCoupon = { title, couponCode, expiryDate }
        console.log(newCoupon)
        return NextResponse.json(newCoupon)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create coupons", error }, { status: 500 })

    }
}