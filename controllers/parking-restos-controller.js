const knex = require('knex')(require('../knexfile'));

const parkingRestosAll = async (_req, res) => {
  try {
    const data = await knex('parking_restos');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Parking/Restos: ${err}`)
  }
}

module.exports = {
  parkingRestosAll
}