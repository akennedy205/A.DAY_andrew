const Tracker = require('../models/Tracker');

async function index(req, res) {
  try {
    const tracker = await Tracker.all;
    res.status(200).json(tracker);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function show(req, res) {
  try {
    const author = await Habit.findById(req.params.id);
    const books = await author.books;
    res.status(200).json({ ...author, books });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { index, show };
