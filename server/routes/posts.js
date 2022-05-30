const express = require('express');
const Post = require('../models/Post');

const route = express.Router();

route.get('/', async (_, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.post('/', async (req, res) => {
  try {
    if (!req.body.content)
      return res.status(400).json({ message: 'Content is required.' });

    const post = await Post.create({
      content: req.body.content,
      author: req.body.author,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
});

route.patch('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = route;
