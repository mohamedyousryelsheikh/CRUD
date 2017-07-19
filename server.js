console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser')
const app = express();
app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile('/Users/mohamedelsheikh/Desktop/angular_learning/CRUD' + '/index.html')
})

//mongo db connection

//MongoClient.connect('mongodb://admin:12345@ds163612.mlab.com:63612/star-wars-quotes', (err, database) => {
  // ... do something here
  //console.log("successful connection") 
//})

// Connection URL
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://admin:12345@ds163612.mlab.com:63612/star-wars-quotes';
var db
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  //db.close();
app.use(bodyParser.urlencoded({extended: true}))
  app.post('/quotes', (req, res) => {
 db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log(req.body);
    console.log('saved to database')
    //res.redirect('/') 
  }) 
}) 
});



