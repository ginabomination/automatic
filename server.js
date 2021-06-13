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
}, (erro, client) => {
    const db = client.db('Sustain')
    const Collection = db.collection('/Moisture')
       app.post('/Moisture', (req, res) => {
        Collection.updateOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/Moisture')
          })
          .catch(error => console.error(error))
          if (erro) return console.error(erro)
  console.log('Connected to Database')
      })
      app.get('/', (req, res) => {
        res.render('index.ejs')
      })})