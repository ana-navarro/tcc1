const Finantial = require("../models/Finantial");

const createFinatial = async (req, res) => {
    try{
        const newFinantial = new Finantial({
            valueEnergy: req.body.valueEnergy,
            discount: req.body.discount,
            valueDiscount: req.body.valueDiscount,
            date: req.body.date,
            payment: req.body.payment
        });
        const savedFinantial = await newFinantial.save();
        res.status(201).json({savedFinantial, "msg": "Finantial Report was created!"});
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

const updateFinatial = async (req, res) => {
    const { idTechnical, idCompany, valueEnergy, discount, valueDiscount, date, payment } = req.body
    try{
        const updatedFinantial = await Finantial.findById(req.params.id)
        if(updatedFinantial){
            updatedFinantial.valueEnergy = valueEnergy,
            updatedFinantial.discount = discount,
            updatedFinantial.valueDiscount = valueDiscount,
            updatedFinantial.date = date,
            updatedFinantial.payment = payment
        }else{
            res.status(404).json({"msg": "Finantial Report not found"});
        }
        await updatedFinantial.save();
        res.json(updatedFinantial).status(201);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const deleteFinatial = async (req, res) => {
    try{
        await Finantial.findByIdAndDelete(req.params.id);
        res.status(200).json({"msg": "Finantial Report was deleted!"});
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getFinatial = async (req, res) => {
    try{
        const finantial = await Finantial.findById(req.params.id);
        res.status(200).json(finantial);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getFinatials = async (req, res) => {
    const { idCompany, valueEnergy, discount, date, payment, ...others } = req.query
    try {
        const finantials = await Finantial.find({
            ...others
        });
        res.status(200).json(finantials)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

module.exports = {
    createFinatial,
    updateFinatial,
    deleteFinatial,
    getFinatial,
    getFinatials
}