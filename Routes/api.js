const express = require('express');

const router = express.Router();

//get the list of ninjas from the database

router.get("/ninjas", function(req, res){
  res.send({type: 'GET'})
})

//add a new ninja to the db
router.post("/ninjas", function(req, res){
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  })
})

//update a ninja in the db
router.put("/ninjas/:id", function(req, res){
  res.send({type: 'PUT'})
})
//delete a ninja in the db
router.delete("/ninjas/:id", function(req, res){
  res.send({type: 'DELETE'})
})


module.exports = router;