const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = mongoose.Schema({
    name: { type: String, required: true },
    administrator: { type: Schema.Types.ObjectId, ref: "users" },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cnpj: { type: String, required: true },
    street: { type: String, required: true },
    neighborhood: { type: String, required: true },
    number: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
});

const Company = mongoose.model('Companies', companySchema);

module.exports = Company;