const UserModel = require("../models/tempModel");
const WorkspaceModel = require("../models/workspaceModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.json({
        error: "email not entered",
      });
    }
    if (!password) {
      return res.json({
        error: "password not entered",
      });
    }
    const user = await UserModel.findOne({ email }).populate("goals");
    if (!user) {
      return res.json({
        error: "Username dont exist",
      });
    }

    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res.json({
        error: "Password didnt match",
      });
    }

    const acesstoken = await jwt.sign(
      {
        name: user.username,
        id: user._id,
      },
      "My_key",
      { expiresIn: "15d" }
    );

    res.cookie("token", acesstoken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    temp = {
      username: user.fullName,
      id: user.id,
      email: user.email,
      pendingWorkspaces: user.pendingWorkspaces,
      approvedWorkspaces: user.approvedWorkspaces,
      goals: user?.goals || [],
    };
    return res.json(temp);
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  res.json({
    message: "something",
  });
};

const signUp = async (req, res) => {
  const {
    fullName,
    email,
    password,
    companyName,
    companySize,
    teamName,
    teamSize,
    workspaceName,
    workspaceColor,
    subscription,
  } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required.",
      });
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        error: "User already exists.",
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      fullName,
      email,
      password: hashedPassword,
      companyName,
      companySize,
      teamName,
      teamSize,
      subscription,
    });
    await user.save();

    const newuser = await UserModel.findOne({ email: email });
    if (!newuser) {
      return res.json({ message: "New user is not created" });
    }

    const workspace = new WorkspaceModel({
      workspaceName,
      workspaceColor,
      owner: newuser._id,
      favorite: false,
    });
    workspace.activities.push("New Workspace has been created");
    workspace.userActive.push(user._id);
    await workspace.save();

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  const { user_id } = req.query;
  try {
    const user = await UserModel.findById(user_id).populate("goals");
    if (user) {
      temp = {
        username: user.fullName,
        id: user.id,
        email: user.email,
        pendingWorkspaces: user.pendingWorkspaces,
        approvedWorkspaces: user.approvedWorkspaces,
        goals: user?.goals || [],
      };
      return res.json(temp);
    } else {
      return res.json({
        error: "No user Found",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { login, logout, signUp, getUser };
