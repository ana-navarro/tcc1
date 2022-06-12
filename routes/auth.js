const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const { check, validationResult } = require('express-validator');
const auth = require("./middlewares/auth");
const User = require("../models/User");
const { generateToken } = require("./middlewares/auth")

dotenv.config();

router.post("/login",async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
            res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            })
        } else {
            res.status(401)
            throw new Error('Invalid email or password')
        }

    jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
        res.json({
            token: token
        });
    });
});

router.post('/register', 
    check('firstname', 'First Name is required').not().isEmpty(),
    check('lastname', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({min: 8})
    , async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }
        try{
            const { firstname, lastname, email } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            let userRegisted = await User.findOne({email});
            if(userRegisted){
                res.status(400).json({ erros: [{ msg:'Something is Wrong' }]});
            }
            const newUser = await User.create({
                firstname,
                lastname,
                email,
                password: hash,
            });
            const token = generateToken(newUser._id);
            res.status(201).json({
                newUser,
                token
            });
        }catch(err){
            console.error(err);
            res.status(500).send('Internal Error');
        }
});

module.exports = router;