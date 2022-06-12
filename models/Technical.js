const mongoose = require("mongoose");

const TechincalSchema = mongoose.Schema({
    idInstallationNumber: { type: Number, required: true },
    idCompany: { type: String, required: true },
    mounth: {  type: String, required: true },
    previousBalance: { type: mongoose.Types.Decimal128, required: true },
    actualBalance: { type: mongoose.Types.Decimal128, required: true },
    injected: { type: mongoose.Types.Decimal128, required: true },
    totalInjected: { type: mongoose.Types.Decimal128, required: true },
},
{
    timestamps:true
});

module.exports = TechincalSchema;