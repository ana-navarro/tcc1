const mongoose = require("mongoose");

const InstallationSchema = mongoose.Schema({
    idCompany: { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
    installationNumber: { type: Number, required: true }
});

const Installation = mongoose.model('installations', InstallationSchema);

module.exports = Installation;