/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('venues').del()
  await knex('venues').insert([
    {
      id: 1, 
      venue_name: 'BMO Field',
      address: "170 Princes' Blvd, Toronto, ON M6K 3C3",
      image_path: '/public/BMOfield.JPG',
    },
    {
      id: 2, 
      venue_name: 'Budweiser Stage',
      address: '909 Lake Shore Blvd W, Toronto, ON M6K 3L3',
      image_path: '/public/BudStage.jpg',
    },
  ]);
};
