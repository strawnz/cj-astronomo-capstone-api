const knex = require('knex')(require('../knexfile'));

const venuesAll = async (_req, res) => {
  try {
    const data = await knex('venues');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Venues: ${err}`)
  }
}

const venueIdFromName = async (req, res) => {
  try {
    const { venueName } = req.params;
    const venueId = await knex("venues")
    .where("venue_name", "=", venueName)
    .first();

    if (venueId !== undefined) {
      return res.status(200).json({ id: venueId.id});
    } else {
      return res.status(404).send({
        message: `Venue ID associated with ${venueName} not found`,
      });
    }
  } catch (error) {
    console.log("Error retrieving venue ID: ", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  venuesAll,
  venueIdFromName
}