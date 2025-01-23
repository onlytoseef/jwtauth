import "dotenv/config";
import express from "express";
import { connectDB } from "./db/index.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

import userRoutes from "./routes/user.routes.js";
import todoRoutes from "./routes/todo.routes.js";

app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);
app.get("/api/date", (req, res) => {
  res.send("hELLO VERY");
});

connectDB()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`Server is runing on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error starting Server", error);
  });
