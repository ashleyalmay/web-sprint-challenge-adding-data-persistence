const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.get()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/', (req, res) => {
  const newMake = req.body
  Resources.post(newMake)
.then(resource => {
  res.json(newMake);
})
.catch(err => {
  res.status(500).json({ message: 'Failed to post resource' });
});
});

module.exports = router;