import express from "express";

import { getAllProducts, addProduct, getProduct, deleteProduct } from "../controllers/todoController";

const router = express.Router();

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllProducts).post(addProduct);

// localhost:8000/todos/:id
router.route("/:id").get(getProduct).delete(deleteProduct);

export default router;