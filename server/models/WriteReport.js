const mongoose = require("mongoose");

const writeReport = new mongoose.Schema({
    title: { type: String, default:'' },
    content: { type: String, default:'' },
    img: { type: String, default:'' }
},
{
    timestamps:true
});

const Write = mongoose.model('write-report', writeReport);

module.exports = Write;