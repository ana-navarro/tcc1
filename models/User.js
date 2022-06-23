const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: { type:String, required:true, unique:true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
    password: { type:String, required:true },
    isAdmin: { type: Boolean, default: false },
    resetLink: {type:String, default:''},
    verified: { type: Boolean, default: false }
},
{
    timestamps:true
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('Users', userSchema);

module.exports = User;