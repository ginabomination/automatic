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
  
  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var dbo = client.db("Sustain");
    var query = { sort: "1" };
    var newvalues = { $set: {soil:  '3', pump: "3" } };
   
  app.get('/', (req, res) => {
    db.collection('Moisture').find().toArray()
    .then(results => { 
      res.render('index.ejs', results)
})
.catch(error => console.error(error))
  })
  
  app.post('/Moisture', (req, res) => {
    dbo.collection("Moisture").updateOne(query, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      client.close();
    });
          })
          .catch(error => console.error(error))
      });
  if (err) return console.error(err)
  console.log('Connected to Database')
