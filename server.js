// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

//set static folder 
//const path = require('path');
app.use(express.static('website'));

//GET route that returns the projectData 
app.get('/all', (req, res) =>{
    response.send(projectData);
}
);

//POST route that adds incoming data to projectData
const data = [];
app.post('/add',(req, res) => {
  projectData['date'] = req.body.date;
  projectData['temp'] = req.body.temp;
  projectData['content'] = req.body.content;
  res.send(projectData);
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

//port creation
const PORT= process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started running on port ${PORT}`));