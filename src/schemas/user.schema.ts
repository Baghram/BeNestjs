import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
    unique: true,
  },
  balance: {
    type: Number,
    min: 0,
    default: 0,
  },
});