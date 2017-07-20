
console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser')
const app = express();

var path    = require("path");

//routing on things.js
var things = require('./things');
app.use('/things', things);

//templating
app.set('view engine', 'pug');
app.set('views','./views');

app.listen(3000, function() {
  console.log('listening on 3000')
})


// Connection URL
/*var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://admin:12345@ds163612.mlab.com:63612/star-wars-quotes';
var db
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  //console.log("Connected correctly to server");
  //db.close();

  //sending data from html form to server.js
  app.use(bodyParser.urlencoded({extended: true}))
  app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err)
             return console.log(err)
        //console.log(req.body);
        console.log('saved to database')
        res.redirect('/') 
    }) 
}) 
    db.collection('quotes').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with quotes here
    })
   
});*/

//mongoose Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:12345@ds163612.mlab.com:63612/star-wars-quotes',function(err,db){
    console.log("connection successful");
});

var personSchema = mongoose.Schema();
var Quotes = mongoose.model("quotes", personSchema);
Quotes.find(function(err, response){
   //console.log(response);
});
//get specific item fro database
Quotes.find({name: "test3"}, 
   function(err, response){
      //console.log("get author name"+response);
});


//routing
app.get('/',function(req,res){
  res.sendFile(path.join('/Users/mohamedelsheikh/Desktop/angular_learning/CRUD'+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join('/Users/mohamedelsheikh/Desktop/angular_learning/CRUD'+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join('/Users/mohamedelsheikh/Desktop/angular_learning/CRUD'+'/sitemap.html'));
}); 
app.get('/Quotes', function(req, res){
   Quotes.find(function(err, response){
        res.json(response);
      
   });
});


app.get('/Quotes_template', function(req, res, next){
  // Quotes.find(function(err,result){
    //var data = JSON.parse(result);
     //console.log(res.json(result)); 
     res.render('QuotesPage', { title: 'Express',myData:JSON.stringify(res)});
   //});
});

app.get('/data.json', function(req, res, next) {
    var db = req.db;
    Quotes.find(function (err, docs) {
        if(err) {
            // Handle error
        } else {
            res.json({'mydata': docs});
        }
    });
});


