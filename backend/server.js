const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
// app.use(express.static(path.join(__dirname)));
dotenv.config();
app.use(express.json()); // For server to accept json data
connectDB();


// Route for getting the default home page
app.get("/", (req, res) => {
  res.send("API is available");
});

// Users endpoint
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error handling middleware middle
app.use(notFound);
app.use(errorHandler);

const port = process.env.port || 5001;
app.listen(port, console.log(`Server listening on port ${port}`.underline.red));
