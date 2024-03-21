import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title text required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  category: {
    type: String,
    required: [true, "Category is required!"],
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

export default model("product", productSchema);