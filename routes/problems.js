var express = require('express');
var router = express.Router();
var parser = require('../parser/parser.js');

/* Parse problem submissions. */
router.post('/*', function(req, res){
  console.log('post req received');
  parser.parse(req, res);
})

module.exports = router;


