const router = require("express").Router();
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



router.delete("/removeMovies", (req, res) => {
  Movie.findOneAndRemove({ _id: req.body.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end(result);
  });
});



router.put("/movies/:id", (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});



module.exports = router;
