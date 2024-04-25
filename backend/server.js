const dotenv = require("dotenv").config();
const express = require("express");

const connectDB = require("./Config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./Routes/taskRoutes");

const app = express();

// connect monogdb
connectDB();

// Middlewares
app.use(express.json()); // it is custo middleware from expres to access req.body json data
app.use(express.urlencoded({ extended: false }));
app.use(taskRoutes); // middleware which point to taskRoutes

// Routers
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

const PORT = process.env.PORT || "5000";

app.listen(PORT, () => {
  console.log(`server runnig on port ${PORT}`);
});
