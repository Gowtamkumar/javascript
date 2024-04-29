import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import colors from "colors";
import { logger } from "./src/middlewares/logger";
import { errorHandler } from "./src/middlewares/errorHandler";
import { getDBConnection } from "./src/config/db";
// all routes
import { setupRoutes } from "./src/routes/routes";
import path from "path";
dotenv.config();
const app = express();

// access publice folder for image
app.use(express.static(path.join(__dirname, "public")));

// Connect to database
if (process.env.NODE_ENV !== "test") {
  getDBConnection();
}
// middleware
app.use(cookieParser()); // cookie parser when we needed the cookies value then we simply get and set
app.use(express.json()); // you ensure that your express application can handle json data sent in the request body automatically
app.use(express.urlencoded({ extended: true })); // it parses incoming request with url-encoded payloads and is based on a body parser.
app.use(cors()); // cros for different http method enable

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// logger assign
app.use(logger);

//main route
setupRoutes(app);
// error Handler
app.use(errorHandler);

//root route
app.get("/", (req, res) => {
  res.send("Welcome to nodejs server!");
});

//not found route
// app.get("*", (req, res) => {
//   res.send("Not found route, Please right route hite");
// });
// Port
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    colors.magenta(
      `Server running in ${process.env.NODE_ENV} Mode on Port ${PORT}`
    )
  );
});

//handle and unhandle promise rejections
process.on("unhandledRejection", (err: any, _message) => {
  console.log(colors.red(`Error ${err.message}`));
  // close server & process exit
  server.close(() => process.exit(1));
});
