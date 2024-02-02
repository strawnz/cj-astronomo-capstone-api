/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('parking_restos').del()
  await knex('parking_restos').insert([
    {
      id: 1, 
      parking_id: 1,
      resto_id: 1,
      distance_resto: 1300,
      duration_resto: 18,
    },
    {
      id: 2, 
      parking_id: 1,
      resto_id: 2,
      distance_resto: 1400,
      duration_resto: 19,
    },
    {
      id: 3, 
      parking_id: 1,
      resto_id: 3,
      distance_resto: 1100,
      duration_resto: 15,
    },
    {
      id: 4, 
      parking_id: 1,
      resto_id: 4,
      distance_resto: 1300,
      duration_resto: 17,
    },
    {
      id: 5, 
      parking_id: 1,
      resto_id: 5,
      distance_resto: 1000,
      duration_resto: 14,
    },
    {
      id: 6, 
      parking_id: 1,
      resto_id: 6,
      distance_resto: 1000,
      duration_resto: 14,
    },
    {
      id: 7, 
      parking_id: 1,
      resto_id: 7,
      distance_resto: 550,
      duration_resto: 7,
    },
    {
      id: 8, 
      parking_id: 1,
      resto_id: 8,
      distance_resto: 1000,
      duration_resto: 14,
    },
    {
      id: 9, 
      parking_id: 1,
      resto_id: 9,
      distance_resto: 1300,
      duration_resto: 18,
    },
  ]);
};
