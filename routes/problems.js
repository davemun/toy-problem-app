var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/*', function(req, res) {
  res.render('problem'+req.path.slice(1), { title: 'Toy Problem '+req.path.slice(1) });
});

module.exports = router;
