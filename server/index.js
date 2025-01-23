import "dotenv/config";
import express from "express";
import { connectDB } from "./db/index.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

import userRoutes from "./routes/user.routes.js";
import todoRoutes from "./routes/todo.routes.js";

app.use("/user", userRoutes);
app.use("/todo", todoRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`Server is runing on PORT ${PORT}`);
    });
    app.get("/", (req, res) => {
      res.send("This is homepath of server");
    });
    app.get("/api/test", (req, res) => {
      res.end("<h1>This is API Request</h1>");
    });
  })
  .catch((error) => {
    console.log("Error starting Server", error);
  });
