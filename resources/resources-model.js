const db = require('../dbConfig.js');

module.exports = {
    get,
    post,
  };
  
  function get() {
    return db('resources');
  }
  
  function post(makeNew) {
    return db('resources').insert(makeNew);
  }