const Installation = require('../models/Installation');

const createInstallation = async (req, res) => {
    try{
        const newInstallation = new Installation({
            installationNumber: req.body.installationNumber,
            idCompany: req.body.idCompany
        })
        const savedInstallation = await newInstallation.save();
        res.status(201).json({savedInstallation, "msg": "Installation Number registed!"})
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

const updateInstallation = async (req, res) => {
    const { idCompany } = req.body;
    try{
        const updatedInstallation = await Installation(req.params.id)
        if(updatedInstallation){
            idCompany = idCompany
        }else {
            res.status(404)
            throw new Error('Installation not found') 
        }
        await updatedInstallation.save();
        res.json(updatedInstallation).status(201);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const deleteInstallation = async (req, res) => {
    try{
        await Installation.findByIdAndDelete(req.params.id);
        res.status(200).json("Installation has been deleted");
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getInstallations = async (req, res) => {
    const { installationNumber, idCompany, ...others } = req.query
    try {
        const installations = await Installation.find({
            ...others
        });
        res.status(200).json(installations);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

module.exports = {
    createInstallation,
    updateInstallation,
    deleteInstallation,
    getInstallations
}