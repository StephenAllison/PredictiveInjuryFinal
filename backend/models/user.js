const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  sport: String,
  league: String,
  team: String,
  staffingDivision: String,
  role: String,
  name: String,
  username: String,
  password: String
});

let User;
try {
  User = mongoose.model("users");
} catch (error) {
  users = mongoose.model("users", userSchema);
}
// const User = mongoose.model("User", userSchema);

module.exports = User;
