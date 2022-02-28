import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "provide valid image",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  lastName: {
    type: String,
    required: [true, "Please provide Last Name"],
    maxlength: 20,
    default: "Last Name",
  },
  location: {
    type: String,
    required: [true, "Please provide Location"],
    maxlength: 20,
    default: "My city",
  },
});

export default mongoose.model("User", UserSchema);
