const bcrypt = require("bcrypt-nodejs");
const crypto = require("crypto");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ingredient",
  },
  cocktails: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "cocktails",
  },
});
UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};
UserSchema.statics.addIngredient = function(ingId, userId){
  const User = mongoose.model("user");
  return User.findById(userId)
    .then(user => {
      user.ingredients.push(ingId)
      return user.save()
    })

}
UserSchema.statics.removeIngredient = function (ingId, userId) {
  const User = mongoose.model("user");
  return User.findById(userId).then((user) => {
    let newIngs = user.ingredients.slice();
    user.ingredients = newIngs
      .slice(0, newIngs.indexOf(ingId))
      .concat(newIngs.slice(newIngs.indexOf(ingId) + 1));
    return user.save();
    
  });
};




module.exports = User = mongoose.model("user", UserSchema);
