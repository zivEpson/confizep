const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * @file course module schema setup
 * @module courseSchema
 */

const courseSchema = new Schema({
  name: String,
  description: String,
  _questions: [{ type: Schema.Types.ObjectId, ref: "question" }],
  dateCreated: Date,
  dateModified: Date,
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("course", courseSchema);
