const Write = require("../models/WriteReport");
const Technical = require("../models/Technical");
const Finantial = require("../models/Finantial");
const Final = require("../models/FinalReport");

const getFinalReports = async (req, res) => {
    const { idReport, companyId, idTechnical, createdAt, ...others } = req.query;
    try{
        const finalreports = await Final.find({
            ...others
        });
        res.status(200).json(finalreports);
    }catch(err){
        console.error(err);
        res.status(500).send({"msg": "Internal Error!"})
    }
}

const getFinalReport = async (req, res) => {
    try{
        const finalReport = await Final.findById(req.params.id);
        if(finalReport){
            const technicalReport = await Technical.findById(finalReport.idTechnical);
            const finantialReport = await Finantial.findById(finalReport.idFinantial);
            const writeReport = await Write.findById(finalReport.idWrite);
            res.json({technicalReport, finantialReport, writeReport});
        }else{
            res.status(404).json({"msg": "Final Report wasn't found"})
        }
        res.status(200);
    }catch(err){
        console.error(err);
        res.status(500).send({"msg": "Internal Error!"})
    }
}

const createFinalReport = async (req, res) => {
    try{
        const newFinantial = new Finantial({
            valueEnergy: req.body.valueEnergy,
            discount: req.body.discount,
            valueDiscount: req.body.valueDiscount,
            date: req.body.date,
            payment: req.body.payment
        });
        const newTechnical = new Technical({
            idInstallationNumber: req.body.idInstallationNumber,
            months: req.body.months,
            previousBalance: req.body.previousBalance,
            actualBalance: req.body.actualBalance,
            injected: req.body.injected,
            totalInjected: req.body.totalInjected
        });
        const newWrite = new Write({
            title: req.body.title,
            content: req.body.content,
            img: req.body.img
        })

        await newWrite.save()
        await newTechnical.save()
        await newFinantial.save()

        const finalReport = new Final({
            idTechnical: newTechnical._id,
            idFinantial: newFinantial.id,
            idWrite: newWrite._id,
            companyId: req.body.companyId
        });
        await finalReport.save()

        res.status(201).json({newFinantial, newTechnical, newWrite});
    }catch(err){
        console.error(err);
        res.status(500).send({"msg": "Internal Error!"})
    }
}

const updateFinalReport = async (req, res) => {
    try{
        const updatedFinal = await Final.findById(req.params.id);

        if(updatedFinal){
            const writeReport = await Write.findByIdAndUpdate(updatedFinal.idWrite, {
                title: req.body.title,
                content: req.body.content,
                img: req.body.img
            });
            const finantialReport = await Finantial.findByIdAndUpdate(updatedFinal.idFinantial, {
                valueEnergy: req.body.valueEnergy,
                discount: req.body.discount,
                valueDiscount: req.body.valueDiscount,
                date: req.body.date,
                payment: req.body.payment
            });
                
            const updatedTechnical = await Technical.findByIdAndUpdate(updatedFinal.idTechnical, {
                months: req.body.months,
                previousBalance: req.body.previousBalance,
                actualBalance: req.body.actualBalance,
                injected: req.body.injected,
                totalInjected: req.body.totalInjected
            });
            res.json({updatedTechnical, finantialReport, updatedFinal});
        }

        if(updatedFinal) {
            updatedFinal.isConclude = req.body.isConclude
        } else {
            res.status(404).json({"msg": "Report was not found"});
        }
        res.status(201);
    }catch(err){
        console.error(err);
        res.status(500).send({"msg": "Internal Error!"})
    }
}

const deleteFinalReport = async (req, res) => {
    try{
        const finalReportId = req.params.id;
        const finalReport = Final.findById(finalReportId);
        const finantialReport = Finantial.findByIdAndDelete(finalReport.idFinantial);
        const technicalReport = Technical.findByIdAndDelete(finalReport.idTechnical);
        const writeReport = Write.findByIdAndDelete(finalReport.idWrite);
        const deleteFinal = Final.findByIdAndDelete(finalReportId);
        res.status(200).json({"msg": "Final Report was deleted!"});
    }catch(err){
        console.error(err);
        res.status(500).send({"msg": "Internal Error!"})
    }
}

module.exports = {
    getFinalReports,
    getFinalReport,
    createFinalReport,
    updateFinalReport,
    deleteFinalReport
}