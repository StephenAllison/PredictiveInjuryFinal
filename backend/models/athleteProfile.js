const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  name: String,
  position: String,
  physicalMediatingFactorScore: Number,
  psychologicalMediatingFactorScore: Number,
  socialMediatingFactorScore: Number,
  physicalModeratingFactorScore: Number,
  psychologicalModeratingFactorScore: Number,
  socialModeratingFactorScore: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
