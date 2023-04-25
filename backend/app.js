const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors =require('cors');
const volunteerRoutes= require('./routes/volunteers.routes');
 require('dotenv').config();

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/volunteers', volunteerRoutes);


// connect to db
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});

mongoose
  .connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
  })
  .then(() => {
    console.log('mongodb connection successful');
  })
  .catch((error) => {
    console.log(error);
  });

//port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});