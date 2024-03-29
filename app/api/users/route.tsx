import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import schema from "./schema";

export async function GET(request: NextRequest){
    const user = await prisma.user.findMany();
    return NextResponse.json(user);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 404});

    const is_user_exist = await prisma.user.findUnique({
        where: { email: body.email }
    })

    if(is_user_exist)
        return NextResponse.json({error: "User already exist."}, {status: 400});

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        }
    })

    return NextResponse.json(user, {status: 201});
}