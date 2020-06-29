const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();



// route to get details on specific movie with joined table
router.get("/:id", (req, res) => {
  let id = req.params.id
  const queryText = `SELECT movies.title, array_agg(genres.name) AS genres
  FROM movies
  JOIN movies_genres ON movies_genres.movie_id=movies.id 
  JOIN genres ON movies_genres.genre_id=genres.id WHERE movies.id = $1
  GROUP by movies.title`;
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