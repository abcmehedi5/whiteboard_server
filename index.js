const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
const connectDB = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");
// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

app.listen(port, () => {
  console.log(`white board app listening on port ${port}`);
});
