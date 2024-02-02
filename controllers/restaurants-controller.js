const knex = require('knex')(require('../knexfile'));

const restaurantsAll = async (_req, res) => {
  try {
    const data = await knex('restaurants');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Restaurants: ${err}`)
  }
}

module.exports = {
  restaurantsAll
}