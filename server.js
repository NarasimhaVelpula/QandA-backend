// server.js
// where your node app starts

// init project
const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const messageRouter = require('./routes/messages')

app.use(cors())
app.use(express.json())

app.use('/message', messageRouter)

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html


// listen for requests :)
const MONGO_CONNECTION_STRING = "mongodb+srv://quiz:quiz@cluster0.d9rf3sg.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001

mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, err => {
      if (err) {
        console.log("Server crashed, Error is " + err)
      }
      else {
        console.log("Server running under port" + PORT)
      }
    })
  })
  .catch((error) => { console.log(error) });