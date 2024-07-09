import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import prismadb from "../../../../libs/prismadb";

export async function PUT(req: Request) {
  try {
    const session: any = await getServerSession({ req } as any);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const userEmail = session?.user?.email;

    const body = await req.json();
    const { oldPassword, newPassword, confirmPassword, hashedPassword } = body;

    if (!oldPassword || !newPassword || !confirmPassword || !hashedPassword) {
      return new Response("Missing data", { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return new Response("new password is not equal to confirm password", {
        status: 400,
      });
    }

    const correctPassword = await bcrypt.compare(oldPassword, hashedPassword);

    if (!correctPassword) {
      throw new Error("Invalid hash-password");
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 12);

    const updatedUser = await prismadb.user.update({
      where: {
        email: session?.user?.email || "",
      },
      data: {
        hashedPassword: newHashedPassword,
      },
    });

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.log("UPDATE_ERR: " + err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
