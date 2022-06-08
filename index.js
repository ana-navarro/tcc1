const express = require("express");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth")

const app = express();

dotenv.config();

app.listen(process.env.PORT || 3000 , () => {
    console.log(`Backend is running on ${process.env.PORT}`);
});

app.use("/api", authRoute)