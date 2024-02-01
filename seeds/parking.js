/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('parking').del()
  await knex('parking').insert([
    {
      id: 1, 
      address: '15 Ontario Dr, Toronto, ON M6K 3C3',
      venue_id: 1,
      distance_venue: 130,
      duration_venue: 2,
    },
    {
      id: 2, 
      address: '95 Nunavut Rd, Toronto, ON M6K 3C3',
      venue_id: 1,
      distance_venue: 170,
      duration_venue: 2,
    },
    {
      id: 3, 
      address: '955 Lake Shore Blvd W, Toronto, ON M6K 3B9',
      venue_id: 1,
      distance_venue: 500,
      duration_venue: 7,
    },
    {
      id: 4, 
      address: '955 Lake Shore Blvd W, Toronto, ON M6K 3B9',
      venue_id: 2,
      distance_venue: 350,
      duration_venue: 4,
    },
    {
      id: 5, 
      address: '15 Ontario Dr, Toronto, ON M6K 3C3',
      venue_id: 2,
      distance_venue: 400,
      duration_venue: 6,
    },
    {
      id: 6, 
      address: '95 Nunavut Rd, Toronto, ON M6K 3C3',
      venue_id: 2,
      distance_venue: 650,
      duration_venue: 9,
    },
  ]);
};
