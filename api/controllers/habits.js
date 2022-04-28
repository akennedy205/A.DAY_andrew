const Habit = require('../models/Habit');

async function index(req, res) {
  try {
    const habit = await Habit.all;
    res.status(200).json(habit);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function show(req, res) {
  try {
    const habit = await Habit.findByUsername(req.params.id);
    res.status(200).json({ habit });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function create(req, res) {
  try {
    const habit = await Habit.create(req.body);
    res.status(201).json(habit);
  } catch (err) {
    console.log(err);
    res.status(422).json({ message: err });
  }
}

module.exports = { index, show, create};
