import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // const session = await auth();

        // if (!session) {
        //     return NextResponse.json(
        //         { error: "Not Authenticated!" },
        //         { status: 200 }
        //     );
        // }

        // const currentUser = await prisma.user.findUnique({
        //     where: {
        //         email: session.user?.email!
        //     }
        // })

        // find the ads
        const fetchedAds = await prisma.ad.findMany({});

        // add user details to the post who made the post
        for (let ad of fetchedAds) {
            const user = await prisma.user.findUnique({
                where: {
                    id: ad.userId
                }
            });
            ad.user = user;
        }

        return NextResponse.json(
            { success: "Ads Found!", ads: fetchedAds },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}