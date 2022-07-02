const mongoose = require("mongoose");

const FinantialSchema = mongoose.Schema({
    valueEnergy: { type: mongoose.Types.Decimal128, required: true },
    discount: { type: mongoose.Types.Decimal128, required: true },
    valueDiscount: { type: mongoose.Types.Decimal128, required: true },
    date: { type: Date, required: true },
    payment: { type: mongoose.Types.Decimal128, required: true },
    payment: { type: String, required: true }
},
{
    timestamps:true
});

const Finantial = mongoose.model('finantial', FinantialSchema);

module.exports = Finantial;