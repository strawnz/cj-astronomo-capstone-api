const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const venueRoutes = require('./routes/venue-routes');

app.use(cors())
app.use(express.json());

app.use('/api/venues', venueRoutes);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});