"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
//import router from "./routes/userRoutes";
const app = (0, express_1.default)();
// MIDDLEWARE
app.use(express_1.default.json({ limit: "10kb" }));
// Url Encoder, Allows express to parse data being sent from a form
app.use(express_1.default.urlencoded({ extended: true, limit: "10kb" }));
/* app.use(
  cors({
    origin: ["http://localhost:5173", "www.productfrontend.com"],
  })
); */
// var allowlist = ["http://example1.com", "http://example2.com"];
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header("Origin")) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };
// app.use(cors(corsOptionsDelegate));
// Setup the CORS
var allowlist = ["http://localhost:5173", "https://earnest-bonbon-ed738d.netlify.app"];
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use((0, cors_1.default)(corsOptionsDelegate));
// ROUTES
app.use("/products", todoRoutes_1.default);
//app.use("/users", router);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Our Express Server!!!!");
});
exports.default = app;
