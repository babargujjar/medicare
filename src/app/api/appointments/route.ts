import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const {
      dateAndTime,
      patient,
      purposeOfVisit,
      appointmentStatus,
      duration,
      appointmentType,
      consultationType,
    } = await req.json();

    const isoDateAndTime = new Date(dateAndTime).toISOString();

    const res = await prisma.appointment.create({
      data: {
        dateAndTime: isoDateAndTime,
        patient,
        purposeOfVisit,
        appointmentStatus,
        duration,
        appointmentType,
        consultationType,
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
      const response = await prisma.appointment.findMany();
      return NextResponse.json({ response, status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ message: "failed ohooooo", status: 500 });
    } finally {
      await prisma.$disconnect();
    }
};


export const DELETE = async (req: NextRequest) => {
  try {
    const { id } = await req.json();

    const deletedPatient = await prisma.appointment.delete({
      where: {
        id: String(id),
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
