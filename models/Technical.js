const mongoose = require("mongoose");

const TechincalSchema = mongoose.Schema({
    idInstallationNumber: { type: mongoose.Schema.Types.ObjectId, ref: "installations" },
    idCompany: { type: mongoose.Schema.Types.ObjectId, ref: "companies"},
    mounth: {  type: String, required: true },
    previousBalance: { type: mongoose.Types.Decimal128, required: true },
    actualBalance: { type: mongoose.Types.Decimal128, required: true },
    injected: { type: mongoose.Types.Decimal128, required: true },
    totalInjected: { type: mongoose.Types.Decimal128, required: true },
},
{
    timestamps:true
});

const Technical = mongoose.model('technincal', TechincalSchema);

module.exports = Technical;