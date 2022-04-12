const express = require('express');
const routes = require('./Routes/api');
const bodyParser = require('body-parser');

 //set up express app

const app = express();


app.use(bodyParser.json())
//app.use takes in the middleware that runs b/w req and res
//initializes the routes

app.use('/api',routes);

//  app.get("/", function(req, res){
//    console.log('Get Request')
//    res.send({name: "nikhil"})
//  })
 //listen for requests

 app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
 })

