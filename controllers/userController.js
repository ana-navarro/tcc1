const User = require("../models/User");

const addCompany = async (req, res) => {
    try {
        const userCompany = await User.findById(req.params.id);
        if(userCompany){
            userCompany.companyId = req.params.companyId
        }else {
            res.status(404);
            throw new Error('User not found');
        }
        await userCompany.save();
        res.json({ "msg": "Company added!" });
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const editProfile = async (req, res) => {
    const { firstname, 
            lastname, 
            companyId, 
            isAdmin, 
            isEngineer, 
            isFinantial, 
            isManager } = req.body;
    try{
        const  editUser = await User.findById(req.params.id);
        if(editUser){
            editUser.firstname = firstname,
            editUser.lastname = lastname,
            editUser.isAdmin = isAdmin,
            editUser.isEngineer = isEngineer,
            editUser.isFinantial = isFinantial,
            editUser.isManager = isManager
            if(editUser.companyId){
                editUser.companyId = companyId
            } else {
                addCompany();
            }
        } else {
            res.status(404);
            throw new Error('User not found');
        }
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
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.params.id);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    try{
        if (user && (await user.matchPassword(oldPassword))) {
            user.password = hash
        } else {
            res.status(401)
            throw new Error('Invalid password')
        }
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

module.exports = {
    addCompany,
    changePassword,
    editProfile,
    getUsers,
    deleteUser,
    getUser
}