var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')
var quotes = JSON.parse(fs.readFileSync(path.resolve("quotes.json")));

/* GET quotess listing. */
router.get('/', function(req, res) {
  res.send(quotes);
});

module.exports = router;
