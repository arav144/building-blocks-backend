import { mongooseConnect } from "@/middleware/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await mongooseConnect();

  const email = await req.nextUrl.searchParams.get("email");

  try {
    const user = await User.findOne({ email });
    return Response.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Error getting user!" }, { status: 500 });
  }
}
