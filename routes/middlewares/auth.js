const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const http = require('http');

const checkToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({ msg:"No token found! You are not authorized!"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    }catch(err){
        console.error(err);
        return res.status(401).json({ msg: "Token is invalid! "});
    }
}

const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}


module.exports = { generateToken, checkToken };