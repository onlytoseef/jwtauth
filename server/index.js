import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;

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
  res.json("This is API Request ");
});
