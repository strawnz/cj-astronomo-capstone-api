const knex = require('knex')(require('../knexfile'));

const formsAll = async (_req, res) => {
  try {
    const data = await knex('forms');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving Forms: ${err}`)
  }
}

const addForm = async (req, res) => {
    try {
        const newForm = req.body;
        const requiredFields = [
            "venue_name",
            "event_date",
            "preferred_time",
            "option_parking",
            "option_restaurant",
            "option_price",
        ];
        for (const field of requiredFields) {
            if (!newForm[field]) {
                return res
                    .status(400)
                    .json({message: `Missing '${field}' in request body`});
            }
        }
        await knex("forms").insert(newForm);
        res.status(201).send(newForm);
    } catch (error) {
        return res.status(400).json({ message: "Could not add new form", error});
    }
};

const lastUpdatedForm = async (_req, res) => {
  try {
    const latestForm = await knex('forms')
      .select('venue_name', 'event_date', 'preferred_time', 'parking_id', 'resto_id', 'venue_id')
      .orderBy('updated_at', 'desc')
      .limit(1)
      .first();

    if (!latestForm) {
      return res.status(404).json({ message: 'Latest form not found' });
    }

    const venueInfo = await knex('venues')
    .select('id', 'venue_name', 'address', 'image_path')
    .where('venue_name', latestForm.venue_name)
    .first();

    const parkingRestoInfo = await knex('parking_restos')
    .select('distance_resto', 'duration_resto')
    .where('parking_id', latestForm.parking_id)
    .andWhere('resto_id', latestForm.resto_id)
    .first();

    const result = {
      latest_form: latestForm,
      venue_info: venueInfo,
      parking_restos_info: parkingRestoInfo,
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error retrieving last updated form: ${error}`);
  }
};

module.exports = {
  formsAll,
  addForm,
  lastUpdatedForm
}