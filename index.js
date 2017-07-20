var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var multer = require('multer');
//var upload = multer();

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });
});

//routing on things.js
var things = require('./things');
app.use('/things', things);

//templating
app.set('view engine', 'pug');
app.set('views','./views');

// for parsing application/json
//app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
//app.use(upload.array()); 
//app.use(express.static('public'));

app.get('/form', function(req, res){
   res.render('form');
});
app.post('/', function(req, res){
   console.log(req.body);
   res.render("successTemplate");
});



app.get('/first_template', function(req, res){
   res.render('first_view');
});

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });
});



app.listen(3000, function() {
  console.log('listening on 3000')
})