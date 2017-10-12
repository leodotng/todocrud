
exports.seed = function(knex, Promise) {
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      const todos = [{
        title: 'Build a CRUD App',
        priority: 1,
        date: new Date()
      }, {
        title: 'Do the dishes',
        priority: 3,
        date: new Date()
      }, {
        title: 'Render a view',
        priority: 2,
        date: new Date()
      }, {
        title: 'Walk the dog',
        priority: 5,
        date: new Date()
      }];

      return knex('todo').insert(todos);
    });
};
