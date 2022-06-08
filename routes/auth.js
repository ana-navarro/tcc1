const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const validate = require("express-validator");

dotenv.config();

router.use("/login", (req, res, next) => {});
router.use("/register", (req, res, next) => {});