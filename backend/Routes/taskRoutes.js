const express = require("express");
const Task = require("../models/taskModel");
const {
  GetAllTasks,
  CreateTask,
  GetATask,
  DeleteTask,
  UpdateTask,
} = require("../controllers/taskController");
const router = express.Router();

// Create Task
router.post("/api/v1/tasks", CreateTask);
// Get All Tasks
router.get("/api/v1/tasks", GetAllTasks);
// Get A Single Task
router.get("/api/v1/tasks/:id", GetATask);
router.delete("/api/v1/tasks/:id", DeleteTask);
router.patch("/api/v1/tasks/:id", UpdateTask);

module.exports = router;
