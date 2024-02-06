/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('forms').del()
  await knex('forms').insert([
    {
      id: 1, 
      venue_name: 'BMO Field',
      event_date: '2024-02-02',
      preferred_time: '2024-02-02 00:00:00',
      option_parking: 'yes',
      option_restaurant: 'yes',
      option_price: '$$',
      parking_id: 1, 
      resto_id: 1,
      venue_id: 1,
    },
  ]);
};
