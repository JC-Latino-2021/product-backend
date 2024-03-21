import product from "../models/productModel";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const data = await product.find({});

    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {    
    const newProduct = await product.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Fetch a single product using a similar approach to above
// const singleTodo = await Todo.findById(req.params.id);
export const getProduct = async (req: Request, res: Response) => {
  try {
    const data = await product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};


export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};