const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.get()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.post('/', (req, res) => {
    const makeNew = req.body
    console.log (makeNew)
    Projects.post(makeNew)
  .then(projects => {
    res.json(makeNew);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to post project' });
  });
  });
  
  module.exports = router;