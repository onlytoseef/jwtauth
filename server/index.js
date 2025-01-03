import "dotenv/config";
import express from "express";
import { connectDB } from "./db/index.js";

const app = express();
const PORT = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(
        `Server is runing on PORT ${PORT}`,
        `This is key ${process.env.KEY}`
      );
    });
    app.get("/", (req, res) => {
      res.send("This is homepath of server");
    });
    app.get("/api/test", (req, res) => {
      res.end("<h1>This is API Request</h1>");
    });
  })
  .catch((err) => {
    console.log("Error starting Server", err);
  });
