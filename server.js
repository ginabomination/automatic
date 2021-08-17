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
        res.render('index.ejs', results)
  })
  .catch(error => console.error(error))   
  
  app.post('/Moisture', (res) => {
    if (err) throw err;
    var dbo = client.db("Sustain");
    var myquery = { sort: "1" };
    var newvalues = { $set: {soil:  5, pump: 5 } };
    dbo.collection("Moisture").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      client.close();
   
    then(result => {
    console.log(result)
    res.redirect('/')
  })
  .catch(error => console.error(error))
}); }); 
if (err) return console.error(err)
console.log('Connected to Database')}) ;