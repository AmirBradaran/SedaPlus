import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import catchError from "./Utils/catchError";
import HandleError from "./Utils/handleError";
import getToken from "./Utils/getToken";
import jwt from "jsonwebtoken";
import Logs from "./Models/Logs";

const app = express();

// Config
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

// Routes :
app.use(async (req, res, next) => {
  try {
    const token = getToken(req);
    const { role, id } = jwt.verify(token, process.env.JWT_SECRET);
    if (role === "admin" || role === "superAdmin") {
      let url = req.url;
      let method = req.method;
      let body = req.body;
      let userId = id;
      await Logs.create({ url, method, body, userId });
    }
    return next();
  } catch (err) {
    return next();
  }
});
app.use("*", async (req, res, next) => {
  return next(new HandleError("api route not found", 404));
});
app.use(catchError);

export default app;
