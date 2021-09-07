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
 
    app.get('/', (req, res) =>{
        res.render('index.ejs');
  }); 
  
  app.post('/Moisture', (req, res) => {
    if (err) throw err;
    var dbo = client.db("Sustain");
    var newvalues = { $set: (req.body)};
    dbo.collection("Moisture").updateOne(newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      client.close();
  }) 
  app.get('/', (req, res) =>{
    res.render('index.ejs');
}); 
}); 
app.post('/Time', (req, res) => {
  if (err) throw err;
  var dbo = client.db("Sustain");
  var newvalues = { $set: (req.body)};
  dbo.collection("Time").updateOne(newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    client.close();
}) 
app.get('/', (req, res) =>{
  res.render('index.ejs');
}); 
});
if (err) return console.error(err)
console.log('Connected to Database')}); 