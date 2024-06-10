import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const adId = await req.json();
        // update the user's profile
        const ad = await prisma.ad.findUnique({
            where: {
                adId
            },
        })

        // find the owner of book
        const foundUser = await prisma.user.findUnique({
            where: {
                id: ad?.userId
            }
        });

        return NextResponse.json(
            { success: "Posts Found!", ads: ad, user: foundUser },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}