const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema({
    title: { type: String, required:true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
    dateMaintain: { type: Date, required:true },
    description: { type: String, required:true },
    isConclude: { type: Boolean, default: false }
},
{
    timestamps:true
});

const Maintenance = mongoose.model('maintenance', MaintenanceSchema);

module.exports = Maintenance;