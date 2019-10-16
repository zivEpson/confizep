const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * @file user module schema setup
 * @module userSchema
 */

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  isAdmin: Boolean,
  dateCreated: Date,
  dateModified: Date
});

mongoose.model("users", userSchema);
