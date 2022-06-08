const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.listen(process.env.PORT || 3000 , () => {
    console.log(`Backend is running on ${process.env.PORT}`);
});

app.use("/", (req, res) => {
    res.status(200).send("Hello World")
});