const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  grade: { type: String, required: true, unique: true },
});

module.exports = mongoose.models.Grade || mongoose.model("Grade", GradeSchema);
