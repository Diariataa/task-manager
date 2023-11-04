const mongoose = require("mongoose");
//models representation of the collection
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
