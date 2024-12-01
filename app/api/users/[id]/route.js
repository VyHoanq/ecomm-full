import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const { id } = await context.params; // Await params here

    const user = await db.user.findUnique({
      where: { id },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch user",
        error,
      },
      { status: 500 }
    );
  }
}