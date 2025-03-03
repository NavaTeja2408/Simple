const express = require("express");
const cors = require("cors");
const {
  signUp,
  login,
  logout,
  getUser,
} = require("../Components/authComponents");

const authRouter = express.Router();

authRouter.use(cors());

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/getUser", getUser);

module.exports = authRouter;
