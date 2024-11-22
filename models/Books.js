const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    uri: { type: String, required: true },
    grade: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    orientation: { type: String, default: "auto" },
    edition: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Books || mongoose.model("Books", BooksSchema);
