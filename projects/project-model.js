const db = require('../dbConfig.js');

module.exports = {
    get,
    post,
  };
  
  function get() {
    return db('projects');
  }
  
  function post(makeNew) {
    return db('projects').insert(makeNew);
  }