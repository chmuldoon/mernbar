const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const IngredientType = require("./ingredient_type")
const Ingredient = mongoose.model("ingredient")

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    ingredients:{
      type: new GraphQLList(IngredientType),
      resolve() {
        return Ingredient.find({})
      }
    }
  }),
});

module.exports = RootQuery;
