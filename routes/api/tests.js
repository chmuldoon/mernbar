const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Ingredient = require("../../server/models/Ingredient")

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server err");
  }
});


module.exports = router;