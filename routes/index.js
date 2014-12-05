var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var nameDescTups = [
                     ['add', 'Create an addition function that returns the sum of the two arguments'],
                     ['isPrime', 'Create a function that returns true if a number is prime and false if it is not'],
                     ['spiralTraversal', 'Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),\n and prints out every value found, but in a spiral from the upper left in to the center\n Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of']
                   ];
