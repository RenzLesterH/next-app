import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import schema from "./schema";

export async function GET(request: NextRequest){
    const product = await prisma.product.findMany();
    return NextResponse.json(product);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    const exist = await prisma.product.findUnique({
        where: { name: body.name }
    })

    if(exist)
        return NextResponse.json({error: "Product already exist."}, {status: 400});

    const product = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
        }
    })

    return NextResponse.json(product, {status: 201});
}