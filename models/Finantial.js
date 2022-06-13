const mongoose = require("mongoose");

const FinantialSchema = mongoose.Schema({
    idTechnical: { type: mongoose.Schema.Types.ObjectId, ref: "technical" },
    valueEnergy: { type: mongoose.Types.Decimal128, required: true },
    discount: { type: mongoose.Types.Decimal128, required: true },
    valueDiscount: { type: mongoose.Types.Decimal128, required: true },
    date: { type: Date, required: true },
    payment: { type: mongoose.Types.Decimal128, required: true }
},
{
    timestamps:true
});

const Finantial = mongoose.model('Finantial', FinantialSchema);

module.exports = Finantial;