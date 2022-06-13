const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const companyRoute = require("./routes/company");
const companyRoute = require("./routes/user");

const app = express();

dotenv.config();

const connect = async () => {
    try{
        mongoose.connect(process.env.DB);
        console.log("DB is connected!");
    } catch(err){
        console.log(err)
    }
}
app.listen(process.env.PORT || 3000 , () => {
    console.log(`Backend is running on ${process.env.PORT}`);
    connect();
});

app.use(express.json());
app.use("/api", authRoute);
app.use("/api/company", companyRoute);
app.use("/api/user", userRoute);