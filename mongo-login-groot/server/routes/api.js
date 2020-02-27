const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
// const Media = require('../models/media');
const Groot = require('../models/groot');
const jwt = require('jsonwebtoken');
// const db = "mongodb://cluster0-shard-00-01-dcypd.mongodb.net:27017";
const db = "mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb";
// mongoose.Promise = global.Promise;
////////  users //////////////////////////////////////////////////////////////////

mongoose.connect(db, function(err){
    if(err){
        console.error('oops! theres an error! ' + err)
    } else {
      console.log('Connected to mongodb')
    }
});



const app = express();
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
  const idx = req.params.id - 1;

  if (!users[idx]) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(users[idx]);
});

////////// groot ////////////////////////////////////////////////////////////////////

app.get("/api/groot", (req, res) => {
  return res.json(groot);
});

app.get("/api/groot/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
  const idx = req.params.id - 1;

  if (!groot[idx]) {
    return res.status(404).json({ error: "Groot not found" });
  }

  return res.json(groot[idx]);
});

////////// media ////////////////////////////////////////////////////////////////////
//
// app.get("/api/media", (req, res) => {
//   return res.json(media);
// });
//
// app.get("/api/media/:id", (req, res) => {
//   // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
//   const idx = req.params.id - 1;
//
//   if (!media[idx]) {
//     return res.status(404).json({ error: "Media not found" });
//   }
//
//   return res.json(media[idx]);
// });
