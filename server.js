//require express in our file to use it
//importing express nodule into our app

const express = require('express')
const app = express();

//now attached to our app are a bunch of methods to start
//our server and send responses to the client

//write a route for the server
app.get('/', (request, response) => {
  response.send('HI, Im the server')
});

app.get('/anythingWeWant', (request, response) => {
  response.send('Whatever we want')
});

app.get('/literallyAnythingYouWant', (request, response) => {
  response.send('literally anything you want')
});

app.get('/tacos', (req, res) => {
  res.send('tacos')
});


//SET UP server
app.listen(3000, () => {
  console.log("server is listening on Port 3000");
})
