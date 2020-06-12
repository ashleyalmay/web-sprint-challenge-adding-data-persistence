const db = require('../dbConfig.js');

module.exports = {
    get,
    post,
  };
  
  function get() {
    return db('tasks');
  }
  
  function post(makeNew) {
    return db('tasks').insert(makeNew);
  }