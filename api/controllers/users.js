const User = require('../models/User');

async function index(req, res) {
  try {
    const books = await User.all;
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function show(req, res) {
  try {
    const user = await User.findByUsername(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function destroy(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const resp = await User.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function update(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const resp = await User.update();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ err });
  }
}

module.exports = { index, show, create, destroy, update };
