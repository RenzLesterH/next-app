import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";
import bcrypt from "bcrypt";

const schema = z.object({
    email: z.string().min(3),
    password: z.string().min(5),
});

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    const is_user_exist = await prisma.user.findUnique({
        where: { email: body.email }
    });

    if(is_user_exist)
        return NextResponse.json({error: "User already exist."}, {status: 400});

    const hashed_password = await bcrypt.hash(body.password, 10);

    const new_user = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword: hashed_password,
        }
    });

    return NextResponse.json({email: new_user.email}, {status: 201});
}