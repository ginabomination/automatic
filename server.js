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
  app.get('/', (req, res) => {
    const db = client.db('Sustain')
    
    db.collection('Moisture').find().toArray()
    .then(results => { res.render('index.ejs',{ Moisture: results})})
   ;
  })
  const Collection = db.collection('Moisture')
       app.post('/Moisture', (req, res) => {
        Collection.updateOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(err => console.err(err))
          if (err) return console.err(err)
  console.log('Connected to Database')
      })
    })