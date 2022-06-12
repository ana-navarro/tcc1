const mongoose = require("mongoose");

const InstallationSchema = mongoose.Schema({
    idCompany: { type: String, required: true },
    installationNumber: { type: Number, required: true }
});

module.exports = InstallationSchema;