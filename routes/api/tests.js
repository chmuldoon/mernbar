const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Ingredient = require("../../server/models/Ingredient")
const Cocktail = require("../../server/models/cocktail");

const IngredientsList = require("../../data/IngredientsList")
const CocktailList = require("../../data/CocktailList")
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
// router.post("/", async (req, res) => {
//   try {
//     const ingredients = await Ingredient.find();
//     // console.log(ingredients.length)
//     // console.log(IngredientsList[0].name);
//     Object.values(CocktailList).forEach((drink) => {
//       function findId(item){
//         return ingredients.filter((i) => i.name === item)[0]._id;
//       }
//       let drinkIds =  drink.using.map(ing => findId(ing))
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
//         usingIds: drinkIds
//       });
//       newDrink.save();
//     });
//     console.log("hit");

//     const cocktails = await Cocktail.find();
//       console.log("hit");

//       console.log("hit");
//     res.json(cocktails);

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server err");
//   }
// });


module.exports = router;