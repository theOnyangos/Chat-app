const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
// app.use(express.static(path.join(__dirname)));
app.use(express.json()); // For server to accept json data
dotenv.config();

connectDB();

// Route for getting the default home page
app.get("/", (req, res) => {
  res.send("API is available");
});

// Users endpoint
app.use("/api/user", userRoutes);

// Error handling middleware middle
app.use(notFound);
app.use(errorHandler);

const port = process.env.port || 8000;
app.listen(port, console.log(`Server listening on port ${port}`.underline.red));
