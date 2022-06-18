const User = require("../models/User");
const bcrypt = require("bcrypt");

const editProfile = async (req, res) => {
    const { name, 
            isAdmin, 
            isEngineer, 
            isFinantial, 
            isManager } = req.body;
    try{
        const  editUser = await User.findById(req.params.id);
        if(editUser){
            editUser.name = name,
            editUser.isAdmin = isAdmin,
            editUser.isEngineer = isEngineer,
            editUser.isFinantial = isFinantial,
            editUser.isManager = isManager
        } else {
            res.status(404);
            throw new Error('User not found');
        }
        await editUser.save()
        res.status(202).json(editUser)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getUsers = async (req, res) => {
    const { firstname, lastname, email, companyId, ...others } = req.query;
    try{
        const users = await User.find({
            ...others
        });
        res.status(200).json(users);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User is deleted!");
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const changePassword = async (req, res) => {
    const { password, newPassword } = req.body;
    const user = await User.findById(req.params.id);
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(newPassword, salt);
    try{
        if (user && (await user.matchPassword(password))) {
            user.password = hash
        } else {
            res.status(401).json({ "msg": 'Invalid password'})
        }
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
    res.status(200).json(user)
}

module.exports = {
    changePassword,
    editProfile,
    getUsers,
    deleteUser,
    getUser
}