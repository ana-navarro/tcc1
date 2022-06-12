const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    title: { type: String, required:true },
    content: { type: String, required:true },
    slug: { type: String, required:true },
    img: { type: String, required:true },
    idFinantial: { type: String, required:true },
    idUser: { type: String },
    isConclude: { type: Boolean, default: false }
},
{
    timestamps:true
});

const Report = mongoose.model('reports', reportSchema);

module.exports = Report;