const { Schema,model} = require("mongoose");

const Book = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
      minLength: [,"Kitob nomi kamida 3 ta harifdan iborat bo'lishi kerak "],
        match: [/^[a-zA-Z]+$/, "Kitob nomi hariflarda kiriting"],
  },
 pages: {
    type: Number,
    required: true,
    max:"kamida 20 betdan iborat bo'lishi kerak"
  },
 published_year: {
    type: String,
    required: false,
    default: null,
    max:new Date().getFullYear,
  },
  image_url: {
    type: String,
    required: true,
  },
description: {
    type: String,
    required: true,
  },
  gener: {
    type: String,
    required: [true,"Kitob janirini kiriting"]
  },
  period: {
    type: String,
    required: true,
  },
  published_home: {
    type: String,
    required:[ true,"nashiryot uyini kiriting"]
  },
  author_id:{
    type: Schema.ObjectId,
    ref:"Author",
    required: true
  }  
},
{
  versionKey: false,
  timestamps: true
}
)

const BookSchema = model("Book", Book);

module.exports = BookSchema;
