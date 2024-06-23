const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routePublication = require('./routes/publications');
const routeMessage = require('./routes/message');
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://kwete:fondationkwete@fondation-kwete.djh9wsl.mongodb.net/fondation-kwete', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connexion à MongoDB réussie!!!'))
    .catch(err => console.error('Connexion à MongoDB échouée !!!', err));

app.use(bodyParser.json());
app.use(express.json());

// Route publications
app.use('/publication', routePublication);

//Route message
app.use('/message', routeMessage);

module.exports = app;
