
const mongoose = require("mongoose");

const finalreportSchema = new mongoose.Schema({
    idWrite: { type: mongoose.Schema.Types.ObjectId, ref: "write-reports", default:''},
    idTechnical: { type: mongoose.Schema.Types.ObjectId, ref: "technincal", required:true},
    idFinantial: { type: mongoose.Schema.Types.ObjectId, ref: "finantial", required:true},
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "companies", required:true },
    isConclude: { type: Boolean, default: false }
},
{
    timestamps:true
});
const Report = mongoose.model('final-report', finalreportSchema);
module.exports = Report;