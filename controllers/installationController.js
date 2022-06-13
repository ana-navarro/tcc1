const Installation = require('../models/Installation');

const createInstallation = async (req, res) => {
    try{
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

const updateInstallation = async (req, res) => {
    try{
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const deleteInstallation = async (req, res) => {
    try{
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getInstallation = async (req, res) => {
    try{
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
}

const getInstallations = async (req, res) => {
    try {
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
};

module.exports = {
    createInstallation,
    updateInstallation,
    deleteInstallation,
    getInstallation,
    getInstallations
}