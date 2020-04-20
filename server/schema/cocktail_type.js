const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLS
} = graphql;
// const Cocktail = mongoose.model("cocktail");

const CocktailType = new GraphQLObjectType({
  name: "CocktailType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    instructions: { type: GraphQLString },
    glass: { type: GraphQLString },
    ingredients: { type: new GraphQLList(GraphQLString) },
    measurements: { type: new GraphQLList(GraphQLString) },
    using: { type: new GraphQLList(GraphQLString) },
    photo: { type: GraphQLString },
  }),
});

module.exports = CocktailType;
