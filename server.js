const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

const hide = document.querySelector("#hide");
const hide2 = document.querySelector("#hide2");
const hide3 = document.querySelector("#hide3");
const hide4 = document.querySelector("#hide4");
const hide5 = document.querySelector("#hide5");
const hide6 = document.querySelector("#hide6");
const hide7 = document.querySelector("#hide7");
const custom = document.querySelector("#custom");
                
custom.addEventListener("click", Custom);
                
function Custom (){
 if (hide.style.display === "block") {hide.style.display = "none";} else {hide.style.display = "block";}
 if (hide2.style.display === "block") {hide2.style.display = "none";} else {hide2.style.display = "block";}
 if (hide3.style.display === "block") {hide3.style.display = "none";} else {hide3.style.display = "block";}
 if (hide4.style.display === "none") {hide4.style.display = "block";} else {hide4.style.display = "none";}
 if (hide5.style.display === "none") {hide5.style.display = "block";} else {hide5.style.display = "none";}
 if (hide6.style.display === "none") {hide6.style.display = "block";} else {hide6.style.display = "none";}
 if (hide7.style.display === "none") {hide7.style.display = "block";} else {hide7.style.display = "none";}
}

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
    var myquery = { sort: "1" };
    var newvalues = { $set: (req.body)};
    dbo.collection("Moisture").updateOne(myquery, newvalues, function(err, res) {
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