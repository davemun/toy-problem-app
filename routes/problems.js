var express = require('express');
var router = express.Router();
var parser = require('../parser/parser.js');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.get('/*', function(req, res) {

  var num = req.path.slice(1);

  res.render('problem'+ num, { title: 'Toy Problem '+ num,
                                            number: num,
                                            name: nameDescTups[num-1][0],
                                            description: nameDescTups[num-1][1]
                                          });
});

router.post('/*', function(req, res){
  console.log('post req received');
  parser.parse(req, res);
})

var nameDescTups = [
                     ['add', 'Create an addition function that returns the sum of the two arguments']
                   ];


module.exports = router;


