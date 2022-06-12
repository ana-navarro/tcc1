const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
    name: { type: String, required: true },
    administrator: { type: String, required: true },
    phone: { type: String, required: true },
    cnpj: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = CompanySchema;