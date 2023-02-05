const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if the request has been authenticated
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    // Checks if the request has a token
    try {
      token = req.headers.authorization.split(" ")[1]; // Get the token from the request

      // decode the token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token

      req.user = await User.findById(decoded.id).select("-password"); // return the user withouth their password
      next(); // If everythin is ok move on to the next
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized, token failed"); //
    }
  }

  if (!token) {
    // No token was provide
    res.status(401);
    throw new Error("Not Authorized, no token was provided"); //
  }
});

module.exports = { protect };
