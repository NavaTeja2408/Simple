const GoalModuleModel = require("../models/goalModuleModel");
const ProposalModel = require("../models/proposeModel");
const UserModel = require("../models/tempModel");
const createProposal = async (req, res) => {
  const { email, workspace_id, name } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: "No User Available" });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    const proposal = new ProposalModel({
      proposalName: name,
      Users: [user._id],
      workspaces: workspace_id,
      favorate: false,
      locked: false,
    });

    await proposal.save();

    // Initialize `proposals` if it doesn't exist
    if (!user.proposals) {
      user.proposals = [];
    }

    user.proposals.push(proposal._id);

    await user.save();

    return res.status(201).json(proposal);
  } catch (error) {
    console.error("Error creating proposal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateProposal = async (req, res) => {
  const { id, rows } = req.body;
  try {
    const proposal = await ProposalModel.findByIdAndUpdate(id, { data: rows });
    if (!proposal) {
      return res.status(404).json({ message: "error" });
    }
    await proposal.save();

    return res.status(201).json(proposal);
  } catch (error) {
    console.error("Error creating proposal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateFavorate = async (req, res) => {
  const { id, favorate } = req.body;
  try {
    const proposal = await ProposalModel.findByIdAndUpdate(id, {
      favorate: favorate,
    });
    if (!proposal) {
      return res.status(404).json({ message: "error" });
    }
    await proposal.save();
    return res.status(201).json(proposal);
  } catch (error) {
    console.error("Error creating proposal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateLocked = async (req, res) => {
  const { id, preview } = req.body;
  try {
    const proposal = await ProposalModel.findByIdAndUpdate(id, {
      locked: preview,
    });
    if (!proposal) {
      return res.status(404).json({ message: "error" });
    }
    await proposal.save();
    return res.status(201).json(proposal);
  } catch (error) {
    console.error("Error creating proposal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProposal = (req, res) => {
  res.json({
    message: "something",
  });
};

const getAllProposal = async (req, res) => {
  const { workspace_id } = req.query;

  if (!workspace_id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const proposals = await ProposalModel.find({
      workspaces: workspace_id,
    }).lean(); // Add `lean()` for plain objects

    if (!proposals || proposals.length === 0) {
      return res
        .status(404)
        .json({ message: "No workspaces found for this user" });
    }

    return res.status(200).json(proposals);
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getProposal = async (req, res) => {
  const id = req.query.id;
  try {
    const proposal = await ProposalModel.findById(id);
    if (!proposal) {
      return res.status(404).json({ message: "error" });
    }

    return res.status(201).json(proposal);
  } catch (error) {
    console.error("Error creating proposal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const createGoal = async (req, res) => {
  const { user_id, name, data, link } = req.body;
  try {
    // Fetch the user from the database
    const user = await UserModel.findById(user_id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({
        error: "No User Found",
      });
    }
    const existingGoal = await GoalModuleModel.findOne({
      data: data,
      Users: user._id,
    });

    if (existingGoal) {
      return res.status(409).json({
        error: "Duplicate goal. This goal already exists for the user.",
      });
    }

    // Create a new goal
    const goal = new GoalModuleModel({
      goalModuleName: name,
      data: data,
      Users: user._id,
      link: link,
    });
    await goal.save();

    // Update user's goals array
    if (!user.goals) {
      user.goals = [];
    }
    user.goals.push(goal._id); // Use push instead of append
    await user.save(); // Save the updated user

    return res.status(201).json(goal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while creating the goal",
    });
  }
};

const getGoal = async (req, res) => {};

const deleteGoal = (req, res) => {
  res.json({
    message: "something",
  });
};

module.exports = {
  createGoal,
  createProposal,
  getAllProposal,
  getGoal,
  getProposal,
  updateProposal,
  deleteGoal,
  deleteProposal,
  updateFavorate,
  updateLocked,
};
