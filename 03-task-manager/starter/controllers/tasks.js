const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
//we re going to wrap all the controllers
const { createCustomError } = require("../errors/custom-error");

//geting all the tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find(req.body);
  res.status(200).json({ tasks });
});
// create a task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
//get one single task
const getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(createCustomError(`No task with id: ${req.params.id}`, 404));
  }
  res.status(200).json({ task });
});
// delete one task
const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return res
      .status(404)
      .json({ message: `No task with id: ${req.params.id}` });
  }
  res.status(200).json({ task });
});
//edit one task
const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    //req body because we're updating a new data
    new: true, // name is required true so we need the new value
    runValidators: true, // so we need the options object the name shouldn't be empty
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${req.params.id}` });
  }
  res.status(200).json({ task });
});

//exports as an object since we're going to add more
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
