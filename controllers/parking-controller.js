const knex = require('knex')(require('../knexfile'));

const parkingAll = async (_req, res) => {
  try {
    const data = await knex('parking');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Parking: ${err}`)
  }
}

const parkingFromVenueId = async (req, res) => {
  const { venue_id: venueId } = req.query;
  try {
    const parkingOptions = await knex('parking')
    .where({ venue_id: venueId });
    res.status(200).json(parkingOptions);
  } catch(err) {
    res.status(500).send(`Error retrieving Parking options: ${err}`)
  }
}

module.exports = {
  parkingAll,
  parkingFromVenueId
}