const { Schema, model } = require("mongoose");

const Author = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "full_name talab qilinadi"],
      unique: [false, "full_name unique bo'lishi kerak "],
      set: (value) => value.trim(),
      minLength: [3, , "Kamida 3 ta harifdan iborat bo'lishi kerak "],
      match: [/^[a-zA-Z]+$/, "Faqat harif kiriting"],
      trim: true,
    },
    brith_year: {
      type: Number,
      required: true,
      max: [
        new Date().getFullYear - 15,
        "Adib 16 yoshdan katta bo'lishi kerak ",
      ],
    },
    death_year: {
      type: String,
      required: false,
      default: null,
      max: new Date().getFullYear(),
    },
    image_url: {
      type: String,
      required: true,
      minLength: [15, "Kamida 15 ta harifdan iborat bo'lishi kerak "],
    },
    bio: {
      type: String,
      required: true,
      max: 10000,
      trim: true,
    },
    gener: {
      type: String,
      required: true,
      set:value => value.toLowerCase(),
      enum: {
        values: [
          "drama",
          "raman",
          "action",
          "fantastic",
          "comedy",
          "historical",
          "documontary",
        ],
        message: `{VALUE} bunday qiymat qabul qilinmaydi`,
      },
    },
    period: {
      type: String,
      required: true,
    set:value => value.toLowerCase(),
      enum: {
        values: [
          "temuriylar davri",
          "jadid adabiyoti",
          "savet davri",
          "mustaqillik davri",
        ],
        message: `{VALUE} bunday qiymat qabul qilinmaydi`,
      },
    },
    creativity: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    region: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

Author.statics.findByFullName=function(value) {
  return this.find({full_name : value})
}


const AuthorSchema = model("Author", Author);

module.exports = AuthorSchema;
