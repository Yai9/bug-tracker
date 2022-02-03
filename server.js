const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', require('./routes/CreateReport'));

mongoose.connect('mongodb+srv://guest_user:guest12345@cluster0.fhm0s.mongodb.net/bug-tracker');


app.listen(3001, ()=>{
    console.log('express server running on port 3001');
});