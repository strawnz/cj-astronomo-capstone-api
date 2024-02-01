const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});