var express = require('express');
var router = express.Router();
var parser = require('../parser/parser.js');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/*', function(req, res) {
  res.render('problem'+req.path.slice(1), { title: 'Toy Problem '+req.path.slice(1) });
});

router.post(function(req, res){
  parser.parse(req, res);
})


module.exports = router;
