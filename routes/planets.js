const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

router.get('/add', function(req,res,next) {
  return res.render('add-planet.ejs', {title: 'LCOGT Database'});
})

router.post('/', async function(req, res, next) {

  const db = await open({
    filename: './data.db',
    driver: sqlite3.Database
  });

  const {name, size, distance, ordinality, description} = req.body;

  db.run("INSERT INTO planets(name,size,distance,ordinality,description) VALUES(?,?,?,?,?);", [name, size, distance, ordinality, description], (err)=> {
    if(err) console.error(err.message);
  })
  
  res.redirect("/");
});


router.get('/detail/:name', async function(req,res,next) {

  const param = req.params.name;

  const db = await open({
    filename: './data.db',
    driver: sqlite3.Database
  });

  const data = await db.get("SELECT * FROM planets WHERE name LIKE ?", [param], (err)=> {
    if(err) console.error(err.message);
  })

  res.render('planet-detail', {data: data});
})

module.exports = router;
