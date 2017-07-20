var express = require('express');
var router = express.Router();
var path    = require("path");


router.get('/angular', function(req, res){
  res.sendFile(path.join('/Users/mohamedelsheikh/Desktop/angular_learning/CRUD/views'+'/angularIndex.html'));
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});


//export this router to use in our index.js
module.exports = router;