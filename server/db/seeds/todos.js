exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, name: 'Trellos', done: false },
        { id: 2, name: 'Coding', done: false },
        { id: 3, name: 'Walking', done: false }
      ])
    })
}
