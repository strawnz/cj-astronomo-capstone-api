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
    {
      id: 3, 
      venue_name: 'Four Seasons Centre for the Performing Arts',
      address: '145 Queen St W, Toronto, ON M5H 4G1',
      image_path: '/public/4seasons.jpg',
    },
    {
      id: 4, 
      venue_name: 'Massey Hall',
      address: '178 Victoria St, Toronto, ON M5B 1T7',
      image_path: '/public/masseyhall.jpg',
    },
    {
      id: 5, 
      venue_name: 'Meridian Hall',
      address: '1 Front St E, Toronto, ON M5E 1B2',
      image_path: '/public/meridianhall.jpg',
    },
    {
      id: 6, 
      venue_name: 'Princess of Wales Theatre',
      address: '300 King St W, Toronto, ON M5V 1J2',
      image_path: '/public/POW.jpg',
    },
    {
      id: 7, 
      venue_name: 'Rogers Centre',
      address: '1 Blue Jays Way, Toronto, ON M5V 1J1',
      image_path: '/public/rogerscentre.jpg',
    },
    {
      id: 8, 
      venue_name: 'Roy Thomson Hall',
      address: '60 Simcoe St, Toronto, ON M5J 2H5',
      image_path: '/public/RTH.jpg',
    },
    {
      id: 9, 
      venue_name: 'Scotiabank Arena',
      address: '40 Bay St., Toronto, ON M5J 2X2',
      image_path: '/public/scotiabankarena.jpeg',
    },
    {
      id: 10, 
      venue_name: 'Elgin and Winter Garden Theatre Centre',
      address: '189 Yonge St, Toronto, ON M5B 1M4',
      image_path: '/public/EWG.jpg',
    }
  ]);
};