const express = require("express");

const app = express();

const dbConfig = require('./db')
const requestRoute = require('./routes/requestRoute')

app.use('/api/requests', requestRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node Server Started`));