const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('listening on 3000')
  })
 

  MongoClient.connect('mongodb+srv://ginags:2tripleX@2021.1ora2.mongodb.net/test', {
  useUnifiedTopology: true
}, (err, client) => {
    const db = client.db('sportdatabase')
    const colourCollection = db.collection('names')

    app.get('/', (req, res) => {
      var query = { House: "" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('indexc.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/fieldhp', (req, res) => {
        var query = { Sportcategory: "Field" };
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('fieldhp.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/trackhp', (req, res) => {
        var query = { Sportcategory: "Track" };
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('trackhp.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/y9', (req, res) => {
        var query = { Year: "9" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y9.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })


      app.get('/y10', (req, res) => {
        var query = { Year: "10" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y10.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })


      app.get('/y11', (req, res) => {
        var query = { Year: "11" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y11.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })


      app.get('/y12', (req, res) => {
        var query = { Year: "12" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y12.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })


      app.get('/y13', (req, res) => {
        var query = { Year: "13" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y13.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/y8', (req, res) => {
        var query = { Year: "8" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y8.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })


      app.get('/y7', (req, res) => {
        var query = { Year: "7" };
        db.collection('names').find(query).toArray()
        .then(results => {
            res.render('y7.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g13', (req, res) => {
        var query = { Year: "13" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y13 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g12', (req, res) => {
        var query = { Year: "12" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y12 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g11', (req, res) => {
        var query = { Year: "11" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y11 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g10', (req, res) => {
        var query = { Year: "10" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y10 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g9', (req, res) => {
        var query = { Year: "9" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y9 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g8', (req, res) => {
        var query = { Year: "8" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y8 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/g7', (req, res) => {
        var query = { Year: "7" };
        db.collection('names').find().toArray()
        .then(results => {
            res.render('y7 copy.ejs', { names: results })
        })
        .catch(error => console.error(error))
      })

      app.get('/field', (req, res) => {
          db.collection('names').find().toArray()
          .then(results => {
              res.render('field.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

        app.get('/track', (req, res) => {
          db.collection('names').find().toArray()
          .then(results => {
              res.render('track.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/nocompetative', (req, res) => {
        var query = { Record: "noncompetative"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('noncompetative.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

        app.get('/rholders', (req, res) => {
          var query = {Placing: "1st"};
            db.collection('names').find(query).toArray()
            .then(results => {
                res.render('competativerecordholders.ejs', { names: results })
            })
            .catch(error => console.error(error))
          })

      app.get('/competative', (req, res) => {
        var query = { Record: "competative"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('competative.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/colin', (req, res) => {
        var query = { House: "Colin"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('colinhp.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/chavon', (req, res) => {
        var query = { House: "Chavoin"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('chavoinhp.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/champagant', (req, res) => {
        var query = { House: "Champagnat"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('champhp.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/chanel', (req, res) => {
        var query = { House: "Chanel"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('chanelhp.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

      app.get('/chavoin', (req, res) => {
        var query = { House: "Chavoin"};
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('Chavoin.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })

        app.get('/query4', (req, res) => {
          var query = { House: "Chanel" };
            db.collection('names').find(query).toArray()
            .then(results => {
                res.render('query4.ejs', { names: results })
            })
            .catch(error => console.error(error))
          })

      app.get('/query3', (req, res) => {
          var query = { House: "Colin" };
            db.collection('names').find(query).toArray()
            .then(results => {
                res.render('query3.ejs', { names: results })
            })
            .catch(error => console.error(error))
          })

      app.get('/query2', (req, res) => {
        var query = { House: "Champagnat" };
          db.collection('names').find(query).toArray()
          .then(results => {
              res.render('query2.ejs', { names: results })
          })
          .catch(error => console.error(error))
        })
        
      app.post('/names', (req, res) => {
        colourCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
  if (err) return console.error(err)
  console.log('Connected to Database')
})