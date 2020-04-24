const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } = graphql;
const IngredientType = require("./ingredient_type");
const Ingredient = require('../models/Ingredient')
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    email: { type: GraphQLString },
    ingredients: { type: new GraphQLList(IngredientType),
    resolve(parentValue){
      return parentValue.ingredients.map(c => Ingredient.findById(c))
    }},

  },
});

module.exports = UserType;
