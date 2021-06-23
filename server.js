const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
  })
       

  MongoClient.connect('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test', function(err, db) {
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
    var myquery = { sort: "1" };
    var newvalues = {$set: {pump: "00", soil: "00"}};
    db.collection('Moisture').updateMany(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res.result.nModified + "document updated");
      res.redirect('/')
      db.close();
    }) .catch(error => console.error(error));        
      })

    
        


      if (err) return console.error(err)
  console.log('Connected to Database')
})

  