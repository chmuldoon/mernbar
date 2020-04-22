const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ingredient",
  },
  cocktailss: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "cocktails",
  },
});

module.exports = User = mongoose.model("user", UserSchema);
