const mongoose = require("mongoose");
//models representation of the collection
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true, //remove whitespace from both ends of the string
    maxlength: [20, " name cannot be more than 20 charachters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
