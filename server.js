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
    const colourCollection = db.collection('Moisture')


      app.post('/Moisture', (req, res) => {
        colourCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
 
        var input = { soil: "Company Inc", pump: "Highway 37" };
        client.Moisture().insertOne(input, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          client.close();
        });
      });
  if (err) return console.error(err)
  console.log('Connected to Database')


