const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000') 
  }) //what local.host channel the database/website is being hosted on
  
  var url = "mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test"; // this connects to the specific database by url
  
  MongoClient.connect(url, function(err, client) {
    if (err) throw err; // if there is an err it prints it in the console log
    var dbo = client.db("Sustain"); //variable to simplify the path into the cluster
 
    app.get('/', (req, res) =>{
        res.render('index.ejs');
  }); // this renders the website 
  
  app.post('/Moisture', (req, res) => {
    if (err) throw err;
    var dbo = client.db("Sustain");
    var myquery = { sort: "1" }; // he databse searchs for document that have the value of 1 for the field sort
    var newvalues = { $set: (req.body)}; // turn the new values that were entered in index.ejs file between <body> and </body> and turn them into a var
    dbo.collection("Moisture").updateOne(myquery, newvalues, function(err, res) { // updates the value in the document found through sort to have the new values in the var=newvalues
      if (err) throw err; // if there is an err it prints it in the console log
      console.log("1 document updated"); // message in the console log that the upadte was succesful
      client.close();
  }) 
}); 
if (err) return console.error(err) // if there is an err it prints it in the console log
console.log('Connected to Database')}); // this prints into the database when it is connected, signaling when the website can be accessed/used 