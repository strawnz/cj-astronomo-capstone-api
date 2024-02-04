const knex = require('knex')(require('../knexfile'));

const restaurantsAll = async (_req, res) => {
  try {
    const data = await knex('restaurants');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Restaurants: ${err}`)
  }
}

const restaurantsSingleByVenue = async (req, res) => {
  try {
    const singleResto = await knex("restaurants")
      .join("restos_venues", "restaurants.id", "restos_venues.resto_id")
      .where( {"restaurants.id": req.params.restoId } )
      .select([
        "restos_venues.resto_id",
        "restaurants.restaurant_name",
        "restaurants.address",
        "restaurants.cuisine",
        "restaurants.website",
        "restos_venues.distance_venue",
        "restos_venues.duration_venue",
      ]);

    if (singleResto.length === 0) {
      return res.status(404).json({
        message: `Restaurant with ID ${req.params.restoId} not found`
      });
    }

    const restoData = singleResto[0];
    res.json(restoData);
  } catch (error) {
    console.log("restaurantsSingle error: ", error);
    res.status(500).json({
      message: `Unable to retrieve data for restaurant with ID ${req.params.restoId}`
    })
  }
}

module.exports = {
  restaurantsAll,
  restaurantsSingleByVenue
}