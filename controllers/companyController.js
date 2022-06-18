    const Company = require('../models/Company');

const createCompany = async (req, res) => {
    try{
        const newCompany = new Company({
            name: req.body.name,
            phone: req.body.phone, 
            cnpj: req.body.cnpj,
            email: req.body.cnpj,
            street: req.body.street,
            neighborhood: req.body.neighborhood,
            number: req.body.number,
            state: req.body.state,
            city: req.body.city
        });
        const savedCompany = await newCompany.save();
        res.status(201).json({savedCompany, "msg": "Company Created!"});
    }catch(err){        
        console.error(err);
        res.status(500).send({"msg":"Internal Error!"});
    }
};

const updateCompany = async (req, res) => {
    const { name, administrator, phone, street, neighborhood, number, state, city } = req.body;
    try{
        const updatedCompany = await Company.findById(req.params.id)
        if(updatedCompany){
            updatedCompany.name = name,
            updatedCompany.phone = phone, 
            updatedCompany.street = street,
            updatedCompany.neighborhood = neighborhood,
            updatedCompany.number = number,
            updatedCompany.state = state, 
            updatedCompany.city = city
        } else {
            res.status(404)
            throw new Error('Company not found')
        }
        await updatedCompany.save();
        res.json(updatedCompany).status(201)
    }catch(err){
        console.error(err);
        res.status(500).send({"msg":"Internal Error!"});
    }
}

const deleteCompany = async (req, res) => {
    try{
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json({"msg":"Company has been deleted"})
    }catch(err){
        console.error(err);
        res.status(500).send({"msg":"Internal Error!"});
    }
}

const getCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params.id);
        res.status(200).json(company);
    }catch(err){
        console.error(err);
        res.status(500).send({"msg":"Internal Error!"});
    }
}

const getCompanies = async (req, res) => {
    const { name, administrator, cnpj, ...others } = req.query
    try {
        const companies = await Company.find({
            ...others
        });
        res.status(200).json(companies);
    }catch(err){
        console.error(err);
        res.status(500).send({"msg":"Internal Error!"});
    }
};

module.exports = {
    createCompany,
    updateCompany,
    deleteCompany,
    getCompany,
    getCompanies
}