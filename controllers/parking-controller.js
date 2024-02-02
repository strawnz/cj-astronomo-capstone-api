const knex = require('knex')(require('../knexfile'));

const parkingAll = async (_req, res) => {
  try {
    const data = await knex('parking');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Parking: ${err}`)
  }
}

module.exports = {
  parkingAll
}