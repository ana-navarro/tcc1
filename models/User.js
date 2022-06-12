const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname: { type: String, required:true, unique:true },
    lastname: { type: String, required:true, unique:true },
    email: { type:String, required:true, unique:true },
    companyId: { type: String },
    password: { type:String, required:true, unique:true },
    isAdmin: { type: Boolean, default: false },
    isEngineer: { type: Boolean, default: false },
    isFinantial: { type: Boolean, default: false },
    isManager: { type: Boolean, default: false }
},
{
    timestamps:true
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('Users', userSchema);

module.exports = User;