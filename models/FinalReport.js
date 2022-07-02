
const mongoose = require("mongoose");

const finalreportSchema = new mongoose.Schema({
    idWrite: { type: mongoose.Schema.Types.ObjectId, ref: "reports", default:''},
    idTechnical: { type: mongoose.Schema.Types.ObjectId, ref: "technincal", default: ''},
    idFinantial: { type: mongoose.Schema.Types.ObjectId, ref: "finantial", default:''},
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
    isConclude: { type: Boolean, default: false }
},
{
    timestamps:true
});
const Report = mongoose.model('final-report', finalreportSchema);
module.exports = Report;