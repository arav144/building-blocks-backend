import { mongooseConnect } from "@/middleware/mongoose";
import Grade from "@/models/Grade";
import { NextResponse } from "next/server";

export async function GET() {
  await mongooseConnect();

  try {
    const grade = await Grade.find();

    return Response.json(grade);
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting Grade!" },
      { status: 500 }
    );
  }
}

// Add a new Grade
export async function POST(req, res) {
  const { image, grade } = await req.json();

  try {
    const existingGrade = await Grade.findOne({ grade });

    if (existingGrade) {
      return NextResponse.json(
        { error: "Grade already exists!" },
        { status: 400 }
      );
    }

    const createGrade = await Grade.create({
      image,
      grade,
    });

    return Response.json(createGrade);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating Grade!" },
      { status: 500 }
    );
  }
}

// Update Grade
export async function PUT(req, res) {
  const { image, grade, _id } = await req.json();

  try {
    const existingGrade = await Grade.findOne({ _id });

    if (existingGrade) {
      const updateGrade = await Grade.findOneAndUpdate(
        { _id },
        { image, grade },
        { new: true }
      );
      return Response.json(updateGrade);
    } else {
      return NextResponse.json({ error: "Grade not found!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating Grade!" },
      { status: 500 }
    );
  }
}

// delete Grade
export async function DELETE(req, res) {
  const { _id } = await req.json();

  try {
    const existingGrade = await Grade.findOne({ _id });

    if (existingGrade) {
      const DeleteGrade = await Grade.findOneAndDelete({ _id });

      return Response.json(DeleteGrade);
    } else {
      return NextResponse.json({ error: "Grade not found!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting Grade!" },
      { status: 500 }
    );
  }
}
