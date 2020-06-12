exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name:'computer', 
      description:'clicky boi', 
    },
    {
      name:'microphone', 
      description:'loud boi', 
    },
    {
      name:'van', 
      description:'travel boi', 
    },
]);
}