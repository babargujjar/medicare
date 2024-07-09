import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const {
      name,
      companyName,
      industry,
      employe,
      email,
      password,
    } = await req.json();

    const res = await prisma.userData.create({
      data: {
        name,
        companyName,
        industry,
        employe,
        email,
        password,
      },
    });

    return NextResponse.json({ message: "successful", status:200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "failed", status: 500,  });
  } finally {
    await prisma.$disconnect();
  }
};
