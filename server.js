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
        Collection.updateMany({sort:{ $gt: "1" }}, { $set: { pump: "00", soil: "00"}})

          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
      if (err) return console.error(err)
  console.log('Connected to Database')
})

  