"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Title text required!"],
        maxlength: 50,
    },
    age: {}
});
exports.default = (0, mongoose_1.model)("User", userSchema);
