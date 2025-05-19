// Import necessary modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companySize: {
    type: String,
  },
  teamName: {
    type: String,
  },
  teamSize: {
    type: String,
  },
  subscription: {
    type: String,
  },
  subscriptionDate: {
    type: Date,
    default: Date.now,
  },

  pendingWorkspaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspaces",
    },
  ],
  approvedWorkspaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspaces",
    },
  ],
  goals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GoalModule",
    },
  ],
  collab: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collab",
    },
  ],
  phoneNo: {
    type: String,
  },
  country: {
    type: String,
  },
  adress: {
    type: String,
  },
  Time: {
    type: String,
  },
  Curency: {
    type: String,
  },
  DataP: {
    type: Boolean,
  },
  DataA: {
    type: Boolean,
  },
  DataT: {
    type: Boolean,
  },
  EmailN: {
    type: Boolean,
  },
  PushN: {
    type: Boolean,
  },
  WorkspaceN: {
    type: Boolean,
  },
  ProposalN: {
    type: Boolean,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
