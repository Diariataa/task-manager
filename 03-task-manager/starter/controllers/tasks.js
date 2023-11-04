const Task = require("../models/Task");
const getAllTasks = (req, res) => {
  res.send("Get all Tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update Task");
};

const deleteTask = (req, res) => {
  res.send("delete Task");
};

//exports as an object since we're going to add more
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
