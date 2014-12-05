var express = require('express');
var router = express.Router();
var parser = require('../parser/parser.js');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.get('/*', function(req, res) {

  var num = req.path.slice(1);

  res.render('problempage', { title: 'Toy Problem '+ num,
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
                     ['add', 'Create an addition function that returns the sum of the two arguments'],
                     ['isPrime', 'Create a function that returns true if a number is prime and false if it is not'],
                     ['spiralTraversal', 'Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),\n and prints out every value found, but in a spiral from the upper left in to the center.'],
                     ['allAnagrams', 'Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.'],
                     ['isPrime', 'Create a function that returns true if a number is prime and false if it is not'],
                     ['isPrime', 'Create a function that returns true if a number is prime and false if it is not']

                   ];


module.exports = router;


