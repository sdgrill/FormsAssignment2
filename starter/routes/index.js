var express = require('express');
const { request } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/birds/create', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) { 
  console.log(req.body.birdTitle);
  console.log(req.body.birdDescription);
  res.render('bird-created', {title: req.body.birdTitle});
});

router.post('/birds/create', (req, res) => {
  console.log(req.body);
  res.send('Bird Data Received.');
});

module.exports = router;
