const mongoose = require("mongoose");

const TechincalSchema = mongoose.Schema({
    idInstallationNumber: { type: mongoose.Schema.Types.ObjectId, ref: "installations" },
    months: {  type: String, required: true },
    previousBalance: { type: String, required: true },
    actualBalance: { type: String, required: true },
    injected: { type: String, required: true },
    totalInjected: { type: String, required: true },
},
{
    timestamps:true
});

const Technical = mongoose.model('technincal', TechincalSchema);

module.exports = Technical;