const mongoose = require("mongoose");
const graphql = require("graphql");
const CocktailType = require("./cocktail_type");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = graphql;
const Ingredient = require("../models/Ingredient")
const IngredientType = new GraphQLObjectType({
  name: "IngredientType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    img: { type: GraphQLString },
    cocktails: {
      type: new GraphQLList(CocktailType),
      resolve(parentValue) {
        return Ingredient.findDrinks(parentValue.id)
      }
    }
  }),
});
module.exports = IngredientType