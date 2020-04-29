const mongoose = require("mongoose");
//will add a function that takes in a list of ingredients 
//and outputs a list of cocktails
const Ingredient = mongoose.model('ingredient')
const Cocktail = mongoose.model("cocktail");

async function userCocktails(list){
  let output = []
  // console.log(list)
  list.forEach(ing => {
    Ingredient.findById(ing).then(i => {
      i.cocktails.forEach(c => {
        if(!output.includes(c)){
          output.push(c)
        }
      })
      
      console.log(output)
    })
      console.log(output);

  })

}

module.exports = { userCocktails };
