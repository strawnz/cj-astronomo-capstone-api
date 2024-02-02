const knex = require('knex')(require('../knexfile'));

const venuesAll = async (_req, res) => {
  try {
    const data = await knex('venues');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Venues: ${err}`)
  }
}

module.exports = {
  venuesAll
}