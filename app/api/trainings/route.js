export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { NextResponse } from "next/server"
import db from "@/lib/db";

export async function POST(req) {
    try {
        const { title, slug, categoryId, description, imageUrl, content, isActive } = await req.json()

        const existingTraining = await db.training.findUnique({
            where: { slug },
        });

        if (existingTraining) {
            return NextResponse.json({
                data: null,
                message: "Training already exists",
            }, { status: 409 });
        }
        const newTraining = await db.training.create({
            data: { title, slug, categoryId, description, imageUrl, content, isActive }
        });
        return NextResponse.json(newTraining);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to create trainings", error }, { status: 500 })

    }
}

export async function GET(req) {
    try {
        const trainings = await db.training.findMany({
            orderBy: {
                createdAt : "desc"
            }
        })
        return NextResponse.json(trainings)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch training",
            error
        }, { status: 500 })
    }
}