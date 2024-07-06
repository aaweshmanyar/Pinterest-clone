const mongoose = require('mongoose');
const { type } = require('os');
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/pinterest");

const userSchema = mongoose.Schema({
  username : String,
  contact  : Number,
  Email : String,
  name : String,
  Password : String,
  ProfileImage : String,
  boards : {
    type : Array,
    default : []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);
