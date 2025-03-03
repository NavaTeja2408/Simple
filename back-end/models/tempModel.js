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
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
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
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
