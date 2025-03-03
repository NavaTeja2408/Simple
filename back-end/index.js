const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./Routes/authRouter");
const workspace = require("./Routes/workspaceRouter");
const editor = require("./Routes/editorRouter");
const path = require("path");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://simplefront-iota.vercel.app",
      "http://localhost:9000",
    ],
  })
);
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://teja29204:jgdwfvejgwfv@simplequotes.wx6ss.mongodb.net"
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch(() => {
    console.log("Database is not Connected");
  });

app.use(express.static(path.join(__dirname, "../front-end/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist", "index.html"));
});

app.use("/api/auth", authRouter);
app.use("/api/workspace", workspace);
app.use("/api/editor", editor);

app.listen(9000, () => console.log("Server is started"));
