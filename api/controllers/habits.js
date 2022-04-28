const Habit = require('../models/Habit');

async function index(req, res) {
  try {
    const habits = await Habit.all;
    res.status(200).json(habits);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function show(req, res) {
  try {
    const author = await Habit.findByUsername(req.params.id);
    const books = await author.books;
    res.status(200).json({ ...author, books });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function create(req, res) {
  try {
    const book = await User.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { index, show, create };
