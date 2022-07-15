const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

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

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnAuthenticatedError('Authentication Invalid')
    }
    const token = authHeader.split(' ')[1]
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId }
        if(user){
            req.body.user = user
            next()
        }else {
            res.status(500).send({ message: 'Unauthenticated' })
        }
    } catch (error) {
        throw new UnAuthenticatedError('Authentication Invalid')
    }
}

const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}


module.exports = { generateToken, checkToken, authMiddleware };