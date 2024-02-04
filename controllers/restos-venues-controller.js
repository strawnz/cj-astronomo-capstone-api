const knex = require('knex')(require('../knexfile'));

const restosVenuesAll = async (_req, res) => {
  try {
    const data = await knex('restos_venues');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Restos/Venues: ${err}`)
  }
}

const restosFromVenueId = async (req, res) => {
  const { venue_id: venueId } = req.query;
  try {
    const restoOptions = await knex('restos_venues')
    .where({ venue_id: venueId });
    res.status(200).json(restoOptions);
  } catch(err) {
    res.status(500).send(`Error retrieving Restaurants by Venue ID options: ${err}`)
  }
}

module.exports = {
  restosVenuesAll, 
  restosFromVenueId
}