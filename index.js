const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const venueRoutes = require('./routes/venue-routes');
const restaurantRoutes = require('./routes/restaurant-routes');
const restoVenueRoutes = require('./routes/resto-venue-routes');
const parkingRoutes = require('./routes/parking-routes');
const parkingRestoRoutes = require('./routes/parking-resto-routes');

app.use(cors())
app.use(express.json());

app.use('/api/venues', venueRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/restos-venues', restoVenueRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/parking-restos', parkingRestoRoutes);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});