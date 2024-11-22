import { mongooseConnect } from "@/middleware/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await mongooseConnect();

  try {
    const user = await User.find();

    return Response.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Error getting user!" }, { status: 500 });
  }
}

// Add a new user
export async function POST(req, res) {
  const { name, email } = await req.json();

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists!" },
        { status: 400 }
      );
    }

    const user = await User.create({ name, email });

    return Response.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating user!" },
      { status: 500 }
    );
  }
}

// Update user
export async function PUT(req, res) {
  const { email, name, phone, _id } = await req.json();

  try {
    const existingUser = await User.findOne({ _id });

    if (existingUser) {
      const user = await User.findOneAndUpdate(
        { _id },
        { name, phone },
        { new: true }
      );
      return Response.json(user);
    } else {
      return NextResponse.json({ error: "User not found!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating user!" },
      { status: 500 }
    );
  }
}

// delete user
export async function DELETE(req, res) {
  const { _id } = await req.json();

  try {
    const existingUser = await User.findOne({ _id });

    if (existingUser) {
      const user = await User.findOneAndDelete({ _id });

      return Response.json(user);
    } else {
      return NextResponse.json({ error: "User not found!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting user!" },
      { status: 500 }
    );
  }
}
