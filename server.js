const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
  })
       

  MongoClient.connect('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test', {
  useUnifiedTopology: true
}, (err, client) => {
  const db = client.db('Sustain')
  const Collection = db.collection('Moisture') 
  
  app.get('/', (req, res) => {
    db.collection('Moisture').find().toArray()
    .then(results => { 
      res.render('index.ejs', results)
})
.catch(error => console.error(error))
  })
  
  app.post('/Moisture', (req, res) => {
    if (err) throw err;
  
   
    .then(result => {
    console.log(result)
    res.redirect('/')
  })
  .catch(error => console.error(error))
})
if (err) return console.error(err)
console.log('Connected to Database')
console.log(res.result.nModified + " document updated")
})
  

const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
  })
       

  MongoClient.connect('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test', {
  useUnifiedTopology: true
}, (err, client) => {
  const db = client.db('Sustain') 
  
  app.get('/', (req, res) => {
    db.collection('Moisture').find().toArray()
    .then(results => { 
      res.render('index.ejs', results)
})
.catch(error => console.error(error))
  })
  
  app.post('/Moisture', (req, res) => {
    var dbo = db.db("Sustain");
  var myquery = { sort: "1" };
  var newvalues = { $set: { pump: "3", soil: "7"}};
  const Collection = db.collection("Moisture");
  Collection.updateMany(myquery, newvalues)

          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
      if (err) return console.error(err)
  console.log('Connected to Database')
  console.log(res.result.nModified + " document updated")
})
