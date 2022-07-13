const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const { check, validationResult } = require('express-validator');
const User = require("../models/User");
const { generateToken, checkToken } = require("./middlewares/auth");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

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
            throw new Error('Email ou Senha Inválido!')
        }

    jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
        res.json({
            token: token
        });
    });
});

router.post('/register', 
    check('name', 'O Nome é obrigatório').not().isEmpty(),
    check('email', 'O Email está Inválido').isEmail(),
    check("password", "A senha precisa de pelo menos uma letra maíscula, minuscula, um numero e caractere especial").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
    , async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }
        try{
            const { name, email } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            let userRegisted = await User.findOne({email});
            if(userRegisted){
                res.status(400).json({ erros: [{ msg:'Something is Wrong' }]});
            }
            const newUser = await User.create({
                name,
                email,
                password: hash,
            });
            // const token = generateToken(newUser._id);
            const token = await new Token({
                userId: newUser._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();

            res.status(201).json({
                newUser,
                token
            });
        }catch(err){
            console.error(err);
            res.status(500).send('Internal Error');
        }
});


router.post('/logout', checkToken, (req, res) => {
    res.removeHeader('x-auth-token');
    res.send('You are Logged Out!');
});

router.post('/forget-password', (req, res) => {});

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
		}

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/verify/:token/", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await User.updateOne({ _id: user._id, verified: true });
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;