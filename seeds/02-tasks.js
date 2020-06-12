exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      completed: 0, 
      project_id: 1, 
      description: 'a nuclear-capable walking tank...',
      notes:'I need to find the metal gear...'
    },
    {
      completed: 0,
      project_id: 2, 
      description: 'a crazy rocket laucher that is op...',
      notes:'jinx was here...'
    },
    {
      completed: 1, 
      project_id: 3, 
      description: 'a crazy op robot that Shinji need to get into...',
      notes:'this anime was crazy...'
    }
]);
}
     