import { getServerSession } from "next-auth";
import prismadb from "../../../../libs/prismadb";

export async function GET(req: Request) {
  try {
    const session: any = await getServerSession({ req } as any);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const userEmail = session?.user?.email;

    if (!userEmail) {
      return new Response("User email not found", { status: 400 });
    }

    const userData = await prismadb.user.findFirst({
      where: {
        email: {
          equals: session?.user?.email || "",
        },
      },
    });

    if (!userData) {
      return new Response("User data not found", { status: 404 });
    }

    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
