const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * @file question module schema setup
 * @module questionSchema
 */

const questionSchema = new Schema({
  title: String,
  body: String,
  answer: String,
  questionType: String,
  hints: [String],
  bodyCode: [String],
  dateCreated: Date,
  dateModified: Date,
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("question", questionSchema);
