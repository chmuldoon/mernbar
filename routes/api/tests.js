const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Ingredient = require("../../server/models/Ingredient")
const IngredientsList = require("../../data/IngredientsList")
// router.post("/", async (req, res) => {
//   try {
//     // const ingredients = await Ingredient.find();
//     // console.log(ingredients)
//     // console.log(IngredientsList[0].name);
//     IngredientsList.forEach(ing => {
//       const newIng = new Ingredient({
//         name: ing.name,
//         img: ing.img
//       });
//       newIng.save()
//     })
//     const ingredients = await Ingredient.find();
//     console.log(ingredients.length)
//     res.json(ingredients);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server err");
//   }
// });


module.exports = router;