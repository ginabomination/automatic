const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
  })
  
  var url = "mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sustain");
    var myquery = { sort: "1" };
    var newvalues = { $set: {soil:  '3', pump: "3" } };
    dbo.collection("Moisture").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  }); 