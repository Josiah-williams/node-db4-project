
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_instructions').insert([
        { id: 1, ingredient_id: 1, instructions_id: 8, quantity: "1 kilo" },
        { id: 2, ingredient_id: 2, instructions_id: 6, quantity: "1 stalks" },
        { id: 3, ingredient_id: 3, instructions_id: 3, quantity: "1/2 cup" },
        { id: 4, ingredient_id: 4, instructions_id: 1, quantity: "3 cups" },
        { id: 5, ingredient_id: 5, instructions_id: 2, quantity: "small measure" },
        { id: 6, ingredient_id: 6, instructions_id: 9, quantity: "to taste" },
        { id: 7, ingredient_id: 7, instructions_id: 3, quantity: "1/3 cup" },
        { id: 8, ingredient_id: 8, instructions_id: 4, quantity: "1 big sized" },
        { id: 9, ingredient_id: 9, instructions_id: 9, quantity: "to taste" }
      ]);
    });
};