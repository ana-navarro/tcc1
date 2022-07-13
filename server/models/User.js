const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        trim: true, 
        required:true 
    },
    email: { 
        type:String,
        trim: true, 
        required:true, 
        unique:true 
    },
    companyId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "companies",
    },
    password: { 
        type:String,
        min: 8,
        max: 64, 
        required:true 
    },
    isAdmin: { 
        type: Boolean, 
        default: false 
    },
    resetCode: "",
    isVerified: { 
        type: Boolean, 
        default: false 
    }
},
{
    timestamps:true
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('Users', userSchema);

module.exports = User;