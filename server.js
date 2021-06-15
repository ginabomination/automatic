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
  app.get('/', (res) => {
    app.set('views',path.join(auto+'/views/'));
    res.render('index.ejs');
  })
  const db = client.db('Sustain')
    const Collection = db.collection('/Moisture')
       app.post('/Moisture', (req, res) => {
        Collection.updateOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/Moisture')
          })
          .catch(errr => console.err(err))
          if (err) return console.errr(err)
  console.log('Connected to Database')
      })
    })