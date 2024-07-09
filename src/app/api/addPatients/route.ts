import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const { foreName, sureName, dateBirth, diasease, phone, gender, note,createdAT,status } =
      await req.json();

    const formattedDateBirth = new Date(dateBirth).toString()
    const today = new Date().getTime().toString()
    
    const res = await prisma.patients.create({
      data: {
        foreName,
        sureName,
        dateBirth: formattedDateBirth,
        diasease,
        phone,
        gender,
        note,
        createdAT:today,
        status
      },
    });

    return NextResponse.json({ message: "successful", status: 200 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({ message: "failed", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};


export const GET = async (req: NextRequest) => {
  try {
    const response = await prisma.patients.findMany();

    return NextResponse.json({ response, status: 200 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({ message: "failed", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};


export const DELETE = async (req: NextRequest) => {
  try {
    const { id  } = await req.json(); 

    const deletedPatient = await prisma.patients.delete({
      where: {
        id:String(id)
      }
    });

    return NextResponse.json({ message: "successful", status: 200 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({ message: "failed", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
