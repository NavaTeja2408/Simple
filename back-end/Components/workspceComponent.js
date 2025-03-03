const WorkspaceModel = require("../models/workspaceModel");
const UserModel = require("../models/tempModel");

const workspaceUpdate = (req, res) => {
  res.json({
    message: "something",
  });
};

const workspaceCreate = async (req, res) => {
  const { user_id, workspaceName, workspaceColor, users } = req.body;
  const temp = [];
  try {
    const workspace = new WorkspaceModel({
      workspaceName: workspaceName,
      workspaceColor: workspaceColor,
      userPending: temp,
      owner: [user_id],

      activities: ["New Workspace has been created"],
      favorate: false,
    });

    await workspace.save();

    if (users.length > 1) {
      users.map((item, key) => {
        const user = UserModel.findOne({ email: item });
        if (user) {
          temp.push(user._id);
          if (!user.pendingWorkspaces) {
            user.pendingWorkspaces = [];
          }
          user.pendingWorkspaces.push(workspace._id);
        }
      });
    }

    return res.status(201).json(workspace);
  } catch (error) {
    console.error("Error creating proposal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const workspaceDelete = (req, res) => {
  res.json({
    message: "something",
  });
};

const workspaceGetAll = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const workspaces = await WorkspaceModel.find({ owner: user_id }).lean(); // Add `lean()` for plain objects

    if (!workspaces || workspaces.length === 0) {
      return res
        .status(404)
        .json({ message: "No workspaces found for this user" });
    }

    return res.status(200).json(workspaces);
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const workspaceGet = (req, res) => {
  res.json({
    message: "something",
  });
};

module.exports = {
  workspaceCreate,
  workspaceDelete,
  workspaceGet,
  workspaceGetAll,
  workspaceUpdate,
};
