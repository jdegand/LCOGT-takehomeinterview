const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

router.get('/', async function(req, res, next) {
  const db = await open({
    filename: './data.db',
    driver: sqlite3.Database
  });
  const entries = await db.all('SELECT * FROM planets');
  res.render('index', { entries: entries });
});

module.exports = router;
