const mongoose = require("mongoose");

const CocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  glass: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  measurements: {
    type: [String],
    required: true,
  },
  using: {
    type: [String],
    required: true,
  },
  photo: {
    type: String,
    required: true,
  }
});

module.exports = Cocktail = mongoose.model("cocktail", CocktailSchema);
