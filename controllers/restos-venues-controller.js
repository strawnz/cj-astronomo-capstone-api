const knex = require('knex')(require('../knexfile'));

const restosVenuesAll = async (_req, res) => {
  try {
    const data = await knex('restos_venues');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Restos/Venues: ${err}`)
  }
}

module.exports = {
  restosVenuesAll
}