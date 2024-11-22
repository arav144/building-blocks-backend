import { mongooseConnect } from "@/middleware/mongoose";
import Books from "@/models/Books";
import { NextResponse } from "next/server";

export async function GET() {
  await mongooseConnect();

  try {
    const books = await Books.find();

    return Response.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting books!" },
      { status: 500 }
    );
  }
}

// Add a new Book
export async function POST(req, res) {
  const {
    image,
    subject,
    description,
    title,
    author,
    uri,
    grade,
    slug,
    orientation,
    edition,
  } = await req.json();

  try {
    const existingBook = await Books.findOne({ slug });

    if (existingBook) {
      return NextResponse.json(
        { error: "Book already exists!" },
        { status: 400 }
      );
    }

    const book = await Books.create({
      image,
      subject,
      description,
      title,
      author,
      uri,
      grade,
      slug,
      orientation,
      edition,
    });

    return Response.json(book);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating book!" },
      { status: 500 }
    );
  }
}

// Update book
export async function PUT(req, res) {
  const {
    image,
    subject,
    description,
    title,
    author,
    uri,
    grade,
    slug,
    _id,
    orientation,
    edition,
  } = await req.json();

  try {
    const existingBook = await Books.findOne({ _id });

    if (existingBook) {
      const book = await Books.findOneAndUpdate(
        { _id },
        {
          image,
          subject,
          description,
          title,
          author,
          uri,
          grade,
          slug,
          orientation,
          edition,
        },
        { new: true }
      );
      return Response.json(book);
    } else {
      return NextResponse.json({ error: "Book not found!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating book!" },
      { status: 500 }
    );
  }
}

// delete book
export async function DELETE(req, res) {
  const { _id } = await req.json();

  try {
    const existingBook = await Books.findOne({ _id });

    if (existingBook) {
      const book = await Books.findOneAndDelete({ _id });

      return Response.json(book);
    } else {
      return NextResponse.json({ error: "Book not found!" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting book!" },
      { status: 500 }
    );
  }
}
