import { mongooseConnect } from "@/middleware/mongoose";
import FeaturedBooks from "@/models/FeaturedBooks";
import { NextResponse } from "next/server";

export async function GET() {
  await mongooseConnect();

  try {
    const books = await FeaturedBooks.find();

    return Response.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting FeaturedBooks!" },
      { status: 500 }
    );
  }
}

// Add a new Book
export async function POST(req, res) {
  const { image, title, uri, slug, orientation, edition } = await req.json();

  try {
    const existingBook = await FeaturedBooks.findOne({ slug });

    if (existingBook) {
      return NextResponse.json(
        { error: "FeaturedBooks already exists!" },
        { status: 400 }
      );
    }

    const book = await FeaturedBooks.create({
      image,
      title,
      uri,
      slug,
      orientation,
      edition,
    });

    return Response.json(book);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating FeaturedBooks!" },
      { status: 500 }
    );
  }
}

// Update book
export async function PUT(req, res) {
  const { image, title, uri, slug, _id, orientation, edition } =
    await req.json();

  try {
    const existingBook = await FeaturedBooks.findOne({ _id });

    if (existingBook) {
      const book = await FeaturedBooks.findOneAndUpdate(
        { _id },
        { image, title, uri, slug, orientation, edition },
        { new: true }
      );
      return Response.json(book);
    } else {
      return NextResponse.json(
        { error: "FeaturedBooks not found!" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating FeaturedBooks!" },
      { status: 500 }
    );
  }
}

// delete book
export async function DELETE(req, res) {
  const { _id } = await req.json();

  try {
    const existingBook = await FeaturedBooks.findOne({ _id });

    if (existingBook) {
      const book = await FeaturedBooks.findOneAndDelete({ _id });

      return Response.json(book);
    } else {
      return NextResponse.json(
        { error: "FeaturedBooks not found!" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting FeaturedBooks!" },
      { status: 500 }
    );
  }
}
