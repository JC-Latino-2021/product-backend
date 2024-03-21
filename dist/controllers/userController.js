"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const users = [
    { id: 1, name: "Akeel" },
    { id: 2, name: "John" },
];
const getAllUsers = (req, res) => {
    res.status(200).send(users);
};
exports.getAllUsers = getAllUsers;
