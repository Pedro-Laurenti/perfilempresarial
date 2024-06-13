// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://tlkoperacional:JmnKU36FjC4EEz7C@ceoglaucoleads.nereuqw.mongodb.net/', {});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/form', (req, res) => {
    const newForm = new Form(req.body);
    newForm.save()
        .then(() => res.status(200).json('Form data saved!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});