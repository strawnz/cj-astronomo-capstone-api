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

const venuesSingle = async (req, res) => {
  try {
    const venueId = req.params.venueId;

    const venue = await knex("venues")
    .where( "id", "=", venueId )
    .select([
      "id",
      "venue_name",
      "address",
      "image_path",
    ]);

  if (venue.length === 0) {
    return res.status(404).json({
      message: `Venue with ID ${req.params.id} not found`
    });
  }

  const venueData = venue[0];
  res.json(venueData);
  } catch (error) {
    console.log("venuesSingle error: ", error);
    res.status(500).json({
      message: `Unable to retrieve data for venue with ID ${req.params.id}`
    })
  }
}

module.exports = {
  venuesAll,
  venueIdFromName, 
  venuesSingle
}