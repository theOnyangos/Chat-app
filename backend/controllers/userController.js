const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/generateToken");

// Method for handling user registration requests
const registerUser = asyncHandler(async (req, res) => {
  // Get data from the request
  const { name, email, password, pic } = req.body;

  // Check if all the fields are valid else return an error
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }

  // Check if the user is already registered
  const isAlreadyRegistered = await User.findOne({ email });

  if (isAlreadyRegistered) {
    res.status(400);
    throw new Error("User already registered");
  }

  //   If all the conditions are met, create new user
  const user = await User.create({ name, email, password, pic });

  if (user) {
    // Create new user and return it
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id), // Create a new token for the user
    });
  } else {
    // Return error failed!
    res.status(400);
    throw new Error("Failed to create user");
  }
});

// User login method
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// /api/user?search=dennis
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

module.exports = { registerUser, authUser, allUsers };
