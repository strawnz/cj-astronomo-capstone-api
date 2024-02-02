/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restos_venues').del()
  await knex('restos_venues').insert([
    {
      id: 1, 
      resto_id: 1,
      venue_id: 1,
      distance_venue: 1200,
      duration_venue: 17,
    },
    {
      id: 2, 
      resto_id: 2,
      venue_id: 1,
      distance_venue: 1000,
      duration_venue: 14,
    },    
    {
      id: 3, 
      resto_id: 3,
      venue_id: 1,
      distance_venue: 700,
      duration_venue: 10,
    },    
    {
      id: 4, 
      resto_id: 4,
      venue_id: 1,
      distance_venue: 900,
      duration_venue: 12,
    },    
    {
      id: 5, 
      resto_id: 5,
      venue_id: 1,
      distance_venue: 650,
      duration_venue: 9,
    },    
    {
      id: 6, 
      resto_id: 6,
      venue_id: 1,
      distance_venue: 700,
      duration_venue: 9,
    },    
    {
      id: 7, 
      resto_id: 7,
      venue_id: 1,
      distance_venue: 550,
      duration_venue: 7,
    },    
    {
      id: 8, 
      resto_id: 8,
      venue_id: 1,
      distance_venue: 650,
      duration_venue: 9,
    },    
    {
      id: 9, 
      resto_id: 9,
      venue_id: 1,
      distance_venue: 900,
      duration_venue: 13,
    },
    {
      id: 10, 
      resto_id: 1,
      venue_id: 2,
      distance_venue: 1600,
      duration_venue: 23,
    },
    {
      id: 11, 
      resto_id: 10,
      venue_id: 2,
      distance_venue: 900,
      duration_venue: 13,
    },
    {
      id: 12, 
      resto_id: 3,
      venue_id: 2,
      distance_venue: 1500,
      duration_venue: 21,
    },
    {
      id: 13, 
      resto_id: 4,
      venue_id: 2,
      distance_venue: 1600,
      duration_venue: 22,
    },
    {
      id: 14, 
      resto_id: 5,
      venue_id: 2,
      distance_venue: 1400,
      duration_venue: 20,
    },
    {
      id: 15, 
      resto_id: 6,
      venue_id: 2,
      distance_venue: 1500,
      duration_venue: 21,
    },
    {
      id: 16, 
      resto_id: 7,
      venue_id: 2,
      distance_venue: 700,
      duration_venue: 10,
    },
    {
      id: 17, 
      resto_id: 8,
      venue_id: 2,
      distance_venue: 1400,
      duration_venue: 21,
    },
    {
      id: 18, 
      resto_id: 9,
      venue_id: 2,
      distance_venue: 1600,
      duration_venue: 23,
    },
  ]);
};
