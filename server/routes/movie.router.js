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


//route to get specific movie
router.get("/:id", (req, res) => {
  let id = req.params.id
  const queryText = `SELECT * FROM movies WHERE id=$1`;
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

router.put('/:id', (req, res) => {
  let movie = req.body; // treat with updated content
  let id = req.params.id; // id of the treat to update
  let title = movie.newTitle;
  let description = movie.newDescription;
  //console.log(`description is: ${description}`);
  //console.log(treat);
  let queryTextForUpdate = `UPDATE "movies" SET description=$2, title=$3 WHERE id = $1`
  pool.query(queryTextForUpdate, [id, description, title])
    .then((result) => {
      console.log(result.command);
      res.status(200).send(`Updating movie ${id} with , ${movie}`);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});


module.exports = router;

