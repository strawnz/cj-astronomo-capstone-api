const knex = require('knex')(require('../knexfile'));
const { formatISO } = require('date-fns');

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
        const submittedForm = await knex("forms").insert(newForm);
        console.log(submittedForm);
        res.status(201).send(submittedForm);
    } catch (error) {
        return res.status(400).json({ message: "Could not add new form", error});
    }
};

const lastUpdatedForm = async (_req, res) => {
  try {
    const latestForm = await knex('forms')
      .select('id', 'venue_name', 'event_date', 'preferred_time', 'parking_id', 'resto_id', 'venue_id')
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

    const restoVenueInfo = await knex('restos_venues')
    .select('distance_venue', 'duration_venue')
    .where('resto_id', latestForm.resto_id)
    .andWhere('venue_id', latestForm.venue_id)
    .first();

    const parkingInfo = await knex('parking')
    .select('id', 'address')
    .where('id', latestForm.parking_id)
    .first();

    const restoInfo = await knex('restaurants')
    .select('id', 'restaurant_name', 'address')
    .where('id', latestForm.resto_id)
    .first();

    const result = {
      latest_form: latestForm,
      venue_info: venueInfo,
      parking_resto_info: parkingRestoInfo,
      resto_venue_info: restoVenueInfo,
      parking_info: parkingInfo,
      resto_info: restoInfo
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error retrieving last updated form info: ${error}`);
  }
};

const storedForm = async (req, res) => {
  try {
    const formId = req.params.formId;

    const data = await knex('forms')
    .select('*')
    .where('id', formId); 
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(500).send(`Error retrieving stored form: ${error}`);
  }
}

const updateForm = async (req, res) => {
  try {
      const formId = req.params.formId;
      const { event_date, updated_at, ...rest } = req.body;

      const eventObject = new Date(event_date);

      const formattedDate = eventObject.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    console.log('event formattedDate: ', formattedDate);

    const formattedTime = eventObject.toLocaleTimeString('en-CA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    console.log('event formattedTime: ', formattedTime);

    const formattedEventDate = `${formattedDate} ${formattedTime}`;
    // const formattedEventDate = new Date(event_date).toISOString();
    // console.log(formattedEventDate);
    // const formattedUpdateDate = new Date(updated_at).toISOString();
    // console.log(formattedUpdateDate);

    const updateColumns = {
      venue_name: rest.venue_name,
      event_date: formattedEventDate,
      preferred_time: rest.preferred_time,
      option_parking: rest.option_parking,
      option_restaurant: rest.option_restaurant,
      option_price: rest.option_price,
      parking_id: rest.parking_id,
      resto_id: rest.resto_id,
      venue_id: rest.venue_id
    }

    const data = await knex('forms')
    .where('id', formId)
    .update(updateColumns);
    res.status(200).json(data);
  } catch (error) {
    console.log('Error updating form: ', error);
    res.status(500).send(`Error updating form: ${error}`);
  }
}

module.exports = {
  formsAll,
  addForm,
  lastUpdatedForm,
  storedForm, 
  updateForm
}