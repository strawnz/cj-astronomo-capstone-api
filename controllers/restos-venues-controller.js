const knex = require('knex')(require('../knexfile'));

const restosVenuesAll = async (_req, res) => {
  try {
    const data = await knex('restos_venues');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Restos/Venues: ${err}`)
  }
}

const restosFromVenueIdPriceChoice = async (req, res) => {
  const { venue_id: venueId, price_level: priceLevel } = req.query;
  try {
    let query = knex('restos_venues').where({ venue_id: venueId });
    
    if (priceLevel) {
      query = query.where({ price_level: priceLevel });
    }

    const restoOptions = await query;
    
    res.status(200).json(restoOptions);
  } catch(err) {
    res.status(500).send(`Error retrieving Restaurants by Venue ID and Price Leveloptions: ${err}`)
  }
}

module.exports = {
  restosVenuesAll, 
  restosFromVenueIdPriceChoice
}