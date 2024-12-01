import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const farmerData = await req.json();

        const newFarmerProfile = await db.farmerProfile.create({
            data: {
                address: farmerData.address,
                contact: farmerData.contact,
                email: farmerData.email,
                name: farmerData.name,
                notes: farmerData.notes,
                payment: farmerData.payment,
                phone: farmerData.phone,
                isActive: farmerData.isActive ?? true,
                profileImageUrl: farmerData.profileImageUrl || '',
                products: farmerData.products ?? [],
                landSize: parseFloat(farmerData.landSize) ,
                mainCrop: farmerData.mainCrop,
                userId: farmerData.userId
            }
        });

        console.log('Created Farmer Profile:', newFarmerProfile);
        return NextResponse.json(newFarmerProfile);
    } catch (error) {
        console.error('Error creating farmer profile:', error);
        return NextResponse.json({ message: "Failed to create farmers", error }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const profiles = await db.farmerProfile.findMany({
            orderBy: { createdAt: "desc" }
        })
        return NextResponse.json(profiles)
    } catch (error) {
        console.error('Error fetching profile:', error);
        return NextResponse.json({
            message: "Failed to fetch profile",
            error: error.message
        }, { status: 500 });
    }
}