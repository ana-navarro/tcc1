const mongoose = require("mongoose");

const FinantialSchema = mongoose.Schema({
    idTechnical: { type: String, required: true },
    valueEnergy: { type: mongoose.Types.Decimal128, required: true },
    discount: { type: mongoose.Types.Decimal128, required: true },
    valueDiscount: { type: mongoose.Types.Decimal128, required: true },
    date: { type: Date, required: true },
    payment: { type: mongoose.Types.Decimal128, required: true }
},
{
    timestamps:true
});

module.exports = FinantialSchema;