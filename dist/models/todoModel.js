"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
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
        required: [true, "Image URL is required!"],
    },
    rating: {
        type: Number,
    },
});
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
