const mongoose = require("mongoose");

const FeaturedBooksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    uri: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    orientation: { type: String, default: "auto" },
    edition: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.FeaturedBooks ||
  mongoose.model("FeaturedBooks", FeaturedBooksSchema);
