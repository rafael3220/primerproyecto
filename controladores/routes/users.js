var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');
let key = ("secret")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
