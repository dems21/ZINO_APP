const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please tell us task name"],
    },
    conpleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    // which allow to create value of "createdat" and "updatedat"
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
