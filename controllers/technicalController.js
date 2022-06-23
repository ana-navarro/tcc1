const Technical = require("../models/Technical");

const createTechnical = async (req, res) => {
    try{
        const newTechnical = new Technical({
            idInstallationNumber: req.body.idInstallationNumber,
            months: req.body.months,
            previousBalance: req.body.previousBalance,
            actualBalance: req.body.actualBalance,
            injected: req.body.injected,
            totalInjected: req.body.totalInjected
        });
        const savedTechnical = await newTechnical.save();
        res.status(201).json({savedTechnical, "msg": "Technical Report was saved!"});
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

const updateTechnical = async (req, res) => {
    const { previousBalance, actualBalance, injected, totalInjected } = req.body;
    try{
        const updatedTechnical = await Technical.findById(req.params.id);
        if(updatedTechnical){
            updatedTechnical.previousBalance = previousBalance,
            updatedTechnical.actualBalance = actualBalance,
            updatedTechnical.injected = injected,
            updatedTechnical.totalInjected = totalInjected
        }else{
            res.status(404).json({ "msg":"Technical Report not found" });
        }
        await updatedTechnical.save();
        res.json(updatedTechnical).status(201)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const deleteTechnical = async (req, res) => {
    try{
        await Technical.findByIdAndDelete(req.params.id);
        res.status(200).json({"msg": "Technical Report was deleted"});
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getTechnical = async (req, res) => {
    try{
        const report = await Technical.findById(req.params.id);
        res.status(200).json(report)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getTechnicals = async (req, res) => {
    const { idInstallationNumber, months, actualBalance, totalInjected, ...others } = req.query
    try {
        const reports = await Technical.find({
            ...others
        });
        res.status(200).json(reports)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

module.exports = {
    createTechnical,
    updateTechnical,
    deleteTechnical,
    getTechnical,
    getTechnicals
}