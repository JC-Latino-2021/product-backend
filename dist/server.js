"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
// ADD CONNECTION TO MONGODB
if (process.env.DATABASE === undefined ||
    process.env.DATABASE_PASSWORD === undefined) {
    throw new Error("DATABASE environment variable(s) not set");
}
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
void mongoose_1.default.connect(DB);
mongoose_1.default.connection
    .on("open", () => {
    console.log("connected to mongo");
})
    .on("close", () => {
    console.log("disconnected from mongo");
})
    .on("error", (error) => {
    console.log("connection failed", error);
});
// START THE SERVER
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
