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
      .select('venue_name', 'event_date', 'preferred_time', 'parking_id', 'resto_id')
      .orderBy('updated_at', 'desc')
      .limit(1)
      .first();

    if (!latestForm) {
      return res.status(404).json({ message: 'Latest form not found' });
    }

    res.status(200).json(latestForm);
  } catch (error) {
    res.status(500).send("Error retrieving last updated form: ", error);
  }
};

module.exports = {
  formsAll,
  addForm,
  lastUpdatedForm
}