const express = require("express");
const router = express.Router(); // creamos una instancia del enrutador de express
const Movie = require("../models/todo");



router.get("/", (req, res) => {
  Movie.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});


router.post("/newMovies", (req, res) => {
  Movie.create(
    req.body, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
});


router.delete("/removeMovies/:id", (req, res) => {
  Movie.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});


router.put("/movies/:id", (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});



module.exports = router;
