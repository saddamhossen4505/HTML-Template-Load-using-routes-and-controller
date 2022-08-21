const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoute');


// Init express.
const app = express();


// Init Environment Variables.
dotenv.config();
const PORT = process.env.PORT || 4000;


// Init Public Folder.
app.use('/public', express.static('public'));


// Get form and json data.
app.use(express.json());
app.use(express.urlencoded({ extended : false }));




// Router Connect.
app.use('/page', pageRoute);



// Create Server.
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`.bgMagenta.black);
});