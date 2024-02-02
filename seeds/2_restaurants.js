/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restaurants').del()
  await knex('restaurants').insert([
    {
      id: 1, 
      restaurant_name: "Wendy's",
      address: '19 Western Battery Rd, Toronto, ON M6K 3S4',
      cuisine: 'Fast-food burger chain',
      price_level: '$',
      website: 'https://order.wendys.com/',
    },
    {
      id: 2, 
      restaurant_name: "McDonald's",
      address: '25 Joe Shuster Way, Toronto, ON M6K 0C7',
      cuisine: 'Fast-food burger chain',
      price_level: '$',
      website: 'https://www.mcdonalds.com/',
    },    
    {
      id: 3, 
      restaurant_name: "Kibo Sushi House - Liberty",
      address: '171 E Liberty St #146, Toronto, ON M6K 3P6',
      cuisine: 'Japanese',
      price_level: '$',
      website: 'https://kibosushi.com/',
    },    
    {
      id: 4, 
      restaurant_name: "Maurya East Indian Roti",
      address: '150 E Liberty St, Toronto, ON M6K 3R5',
      cuisine: 'Indian',
      price_level: '$$',
      website: 'https://www.mauryaindianrestaurants.com/locations/liberty/menu/',
    },    
    {
      id: 5, 
      restaurant_name: "LOCAL Public Eatery",
      address: '171 E Liberty St #100, Toronto, ON M6K 3P6',
      cuisine: 'Canadian pub',
      price_level: '$$',
      website: 'https://localpubliceatery.com/neighbourhoods/liberty-village/menu/',
    },    
    {
      id: 6, 
      restaurant_name: "Chiang Mai",
      address: '171 E Liberty St Unit 144, Toronto, ON M6K 3P6',
      cuisine: 'Thai',
      price_level: '$$',
      website: 'https://www.chiangmai.ca/',
    },    
    {
      id: 7, 
      restaurant_name: "Roses Social",
      address: "111 Princes' Blvd 2nd floor, Toronto, ON M6K 3C3",
      cuisine: 'North American bistro',
      price_level: '$$$',
      website: 'https://rosessocial.ca/menu',
    },    
    {
      id: 8, 
      restaurant_name: "The Craft",
      address: '107 Atlantic Ave, Toronto, ON M6K 1Y2',
      cuisine: 'Bar & grill',
      price_level: '$$$',
      website: 'https://thecraftbrasserie.com/',
    },    
    {
      id: 9, 
      restaurant_name: "NODO Liberty",
      address: '120 Lynn Williams St, Toronto, ON M6K 3N6',
      cuisine: 'Italian',
      price_level: '$$$',
      website: 'https://www.nodorestaurant.ca/',
    },
    {
      id: 10, 
      restaurant_name: "Tim Hortons",
      address: '45 Manitoba Dr, Toronto, ON M6K 3C3',
      cuisine: 'Canadian café',
      price_level: '$',
      website: 'https://www.timhortons.ca/',
    },
  ]);
};
