const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: String,
        password: String
    },
    {
        timestamps: true
    }
);

let User = mongoose.model("users", UserSchema);

module.exports = User;