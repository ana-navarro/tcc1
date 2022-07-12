const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")

const authRoute = require("./server/routes/auth");
const companyRoute = require("./server/routes/company");
const userRoute = require("./server/routes/user");
const reportRoute = require("./server/routes/report");
const maintenanceRoute = require("./server/routes/maintenance");

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

app.use(cors());
app.use(express.json());
app.use("/api", authRoute);
app.use("/api/company", companyRoute);
app.use("/api/user", userRoute);
app.use("/api/report", reportRoute);
app.use("/api/maintenance", maintenanceRoute);