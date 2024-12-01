import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { title, couponCode, expiryDate, isActive } = await req.json()
        const expiryDateObject = new Date(expiryDate);
        
        const newCoupon = await db.coupon.create({
            data: { title, couponCode, expiryDate: expiryDateObject, isActive }
        })
        console.log(newCoupon)
        return NextResponse.json(newCoupon)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create coupons", error }, { status: 500 })

    }
}

export async function GET(req) {
    try {
        const coupons = await db.coupon.findMany({
            orderBy: { createdAt: "desc" }
        })
        return NextResponse.json(coupons)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch coupon",
            error
        }, { status: 500 })
    }
}