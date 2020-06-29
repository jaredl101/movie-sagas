const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// route to get all movies
router.get("/", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM movies ORDER BY title ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// route to get specific movie
router.get("/:id", (req, res) => {
  let id = req.params.id
  const queryText = `SELECT * FROM movies WHERE id = $1 ORDER BY title ASC`;
  pool
    .query(queryText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});



module.exports = router;
