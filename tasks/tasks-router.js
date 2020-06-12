const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.get()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.post('/', (req, res) => {
    const makeNew = req.body
    console.log (makeNew)
    Tasks.post(makeNew)
  .then(tasks => {
    res.json(makeNew);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to post project' });
  });
  });
  
  module.exports = router;