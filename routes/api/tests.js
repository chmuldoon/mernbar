const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const Ingredient = require("../../server/models/Ingredient")
const Cocktail = require("../../server/models/cocktail");

// const IngredientsList = require("../../data/IngredientsList")
// const CocktailList = require("../../data/CocktailList")
// router.post("/", async (req, res) => {
//   const ingredients = await Ingredient.find()
//   console.log(ingredients.length)
//   const cocktails = await Cocktail.find();
//   let ingObj = {}
//   ingredients.forEach(i => ingObj[i.name] = i)

//   try {
//     // const ingredients = await Ingredient.find();
//     // console.log(ingredients)
//     // console.log(IngredientsList[0].name);
//     // IngredientsList.forEach(ing => {
//     cocktails.forEach(c => {
//       c["using2"] = c["using"].map(u => ingObj[u]._id)
//       c.save()
//     })

//     res.json(cocktails)

    
  

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server err");
//   }
// });
// router.post("/", async (req, res) => {
//   try {
//     const ingredients = await Ingredient.find();
//     // console.log(ingredients.length)
//     // console.log(IngredientsList[0].name);
//     Object.values(CocktailList).forEach((drink) => {
//       // console.log(drink.using)

//       // console.log(drinkIds)
//       // throw "err"

//       const newDrink = new Cocktail({
//         name: drink.name,
//         instructions: drink.instructions,
//         glass: drink.glass,
//         ingredients: drink.ingredients,
//         measurements: drink.measurements,
//         using: drink.using,
//         photo: drink.photo,
//       });
//       newDrink.save();
//     });

//     const cocktails = await Cocktail.find();

//     res.json(cocktails);

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server err");
//   }
// });


module.exports = router;