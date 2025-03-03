const express = require("express");
const cors = require("cors");
const {
  workspaceGetAll,
  workspaceGet,
  workspaceCreate,
  workspaceUpdate,
  workspaceDelete,
} = require("../Components/workspceComponent");

const workspace = express.Router();

workspace.use(cors());

workspace.get("/getall", workspaceGetAll);
workspace.get("single", workspaceGet);
workspace.post("/new", workspaceCreate);
workspace.post("/update", workspaceUpdate);
workspace.delete("/delete", workspaceDelete);

module.exports = workspace;
