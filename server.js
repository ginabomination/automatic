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
   
  app.get('/', (res) => {
    dbo.collection('Moisture').find().toArray()
    .then(results => { 
      res.render('index.ejs', results)
})
.catch(error => console.error(error))
  })
 
    var dbo = client.db("Sustain");
    var myquery = { sort: "1" };
    var newvalues = { $set: {soil:  4, pump: 4 } };
    dbo.collection("Moisture").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      client.close();
    });
  }); 
