const db = require('../dbConfig.js');

module.exports = {
    get,
    post,
  };
  
  function get() {
    return db('tasks')
    .select('projects.name as Project Name', 'projects.description as Project Description', 'tasks.description as Task Description', 'tasks.notes as Task Notes', 'tasks.completed as Is Task Completed')
    .join('projects', 'projects.id', '=', 'tasks.project_id')
  }
  
  function post(makeNew) {
    return db('tasks').insert(makeNew);
  }