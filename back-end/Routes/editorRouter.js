const express = require("express");
const cors = require("cors");
const {
  createProposal,
  updateProposal,
  getAllProposal,
  createGoal,
  getGoal,
  getProposal,
  deleteGoal,
  deleteProposal,
  updateLocked,
  updateFavorate,
} = require("../Components/editorComponent");

const editor = express.Router();

editor.use(cors());

editor.post("/newproposal", createProposal);
editor.put("/updateProposal", updateProposal);
editor.put("/locked", updateLocked);
editor.put("/favorate", updateFavorate);
editor.get("/getproposal", getAllProposal);
editor.post("/newgoal", createGoal);
editor.get("/getgoals", getGoal);
editor.get("/getsingle", getProposal);
editor.delete("/delete", deleteProposal);
editor.delete("/deleteGoal", deleteGoal);

module.exports = editor;
