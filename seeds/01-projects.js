exports.seed = function(knex) {
      return knex('projects').insert([
        {
          completed: 0, 
          name: ' Metal Gear blueprints', 
          description: 'a nuclear-capable walking tank...'},
        {
          completed: 0, 
          name: 'Fishbones blueprints', 
          description: 'a crazy rocket laucher that is op...'},
        {
          completed: 1, 
          name: 'Evangelion blueprints', 
          description: 'a crazy op robot that Shinji need to get into...'
        }
  ]);
}