const { string } = require("joi");
const { Schema, model } = require("mongoose");

const Auth = new Schema(
  {
    username: {
      type: String,
      required: [true, "username talab qilinadi"],
      unique: true,
      set: (value) => value.trim(),
      minLength: [3, "Kamida 3 ta harifdan iborat bo'lishi kerak "],
      match: [/^[a-zA-Z0-9]+$/, "Faqat harif va raqam  kiriting"],
    },
    email: {
      type: String,
         required: [true, "email talab qilinadi"],
      unique: true,
      set: (value) => value.trim(),
      minLength: [15, "Kamida 15 ta belgidan iborat bo'lishi kerak "],
    },
  password: {
      type: String,
         required: [true, "password kiritish talab qilinadi"],
      unique: true,
      set: (value) => value.trim(),
      minLength: [8, "Kamida 8 ta belgidan iborat bo'lishi kerak "],
    },
    role: {
      type: String,
      set:value => value.toLowerCase(),
      enum: {
        values: ["superadmin","admin","user"],
        message: `{VALUE} bunday qiymat qabul qilinmaydi`,
      },
      default:"user"
    },
      otp: {
      type: String,
    default: null
    },
      isVerifide: {
      type: Boolean,
    default: false
    },
      otpTime: {
      type: Number,
    default: null
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const AuthSchema = model("Auth", Auth);
module.exports = AuthSchema;
