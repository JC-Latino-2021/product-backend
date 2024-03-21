"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = exports.addTodo = exports.getAllTodos = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield todoModel_1.default.find({});
        res.status(200).json({
            status: "success",
            results: data.length,
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.getAllTodos = getAllTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = yield todoModel_1.default.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                todo: newTodo,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.addTodo = addTodo;
// Fetch a single product using a similar approach to above
// const singleTodo = await Todo.findById(req.params.id);
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield todoModel_1.default.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.getTodo = getTodo;
