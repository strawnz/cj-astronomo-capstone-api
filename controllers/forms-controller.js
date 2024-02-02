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

const chooseParking = async (req, res) => {
  try {
    const { parking_id: parkingId } = req.body;

    console.log('Request Body: ', req.body)

    if(!parkingId) {
      return res
      .status(400)
      .json({message: `Missing 'parking_id' in request body`});
    }

    const formDetails = await knex("forms")
    .where({parking_id: parkingId})
    .first();

    console.log('Form Details: ', formDetails);

    if(!formDetails) {
      return res.status(404).json({
        message: `Form details not found for parking ID: ${parkingId}`,
      });
    }

    const formData = {
      venue_name: formDetails.venue_name,
      event_date: formDetails.event_date,
      preferred_time: formDetails.preferred_time,
      option_parking: formDetails.option_parking,
      option_restaurant: formDetails.option_restaurant,
      option_price: formDetails.option_price,
      parking_id: parkingId,
    };
    res.status(201).send(formData);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Could not add parking choice", error});
  }
}

module.exports = {
  formsAll,
  addForm,
  chooseParking
}