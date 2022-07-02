const mongoose = require("mongoose");

const writeReport = new mongoose.Schema({
    title: { type: String, required:true },
    content: { type: String, required:true },
    img: { type: String, required:true }
},
{
    timestamps:true
});

const Write = mongoose.model('write-report', writeReport);

module.exports = Write;