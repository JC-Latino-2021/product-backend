"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const router = express_1.default.Router();
// localhost:8000/todos/ GET, POST
router.route("/").get(todoController_1.getAllProducts).post(todoController_1.addProduct);
// localhost:8000/todos/:id
router.route("/:id").get(todoController_1.getProduct).delete(todoController_1.deleteProduct);
exports.default = router;
