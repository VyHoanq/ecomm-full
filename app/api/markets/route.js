export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
    try {
        const { title, slug, description, logoUrl, isActive, categoryIds } = await req.json();

        if (!title || !slug || !description || !logoUrl || !Array.isArray(categoryIds)) {
            return NextResponse.json({
                data: null,
                message: "Missing or invalid required fields",
            }, { status: 400 });
        }

        const existingMarket = await db.market.findUnique({
            where: { slug },
        });

        if (existingMarket) {
            return NextResponse.json({
                data: null,
                message: "Market already exists",
            }, { status: 409 });
        }
        const newMarket = await db.market.create({
            data: {
                title,
                slug,
                description,
                logoUrl,
                isActive,
                categoryIds,
            },
        });

        return NextResponse.json(newMarket);
    } catch (error) {
        console.error("Error creating market:", error);
        return NextResponse.json({
            message: "Failed to create market",
            error: error.message,
        }, { status: 500 });
    }
}


export async function GET(req) {
    try {
        const markets = await db.market.findMany({
            orderBy: {
                createdAt : "desc"
            }
        })
        return NextResponse.json(markets)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch market",
            error
        }, { status: 500 })
    }
}