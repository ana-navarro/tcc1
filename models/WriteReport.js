const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    title: { type: String, required:true },
    content: { type: String, required:true },
    img: { type: String, required:true }
},
{
    timestamps:true
});

const Report = mongoose.model('write-report', reportSchema);

module.exports = Report;