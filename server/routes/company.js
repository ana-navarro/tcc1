const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getCompanies, createCompany, updateCompany, deleteCompany, getCompany } = require("../controllers/companyController");
const { createInstallation, updateInstallation, deleteInstallation, getInstallations } = require('../controllers/installationController');
const Installation = require("../models/Installation");

router.get("/", getCompanies);
router.get("/:id", getCompany);
router.post("/create", createCompany);
router.put("/:id/edit", updateCompany);
router.delete("/:id", deleteCompany);
router.get("/:id", getCompany);

router.get("/installations/", getInstallations);
router.post("/installation/add", createInstallation);
router.put("/installation/:id", updateInstallation);
router.delete("/installation/:id", deleteInstallation);

router.get("/:id/installations/", async (req, res) => {
    const {installationNumber, ...others} = req.query
    try{
        const installations = await Installation.find({
            ...others
        }).where('idCompany').equals(req.params.id);
        res.status(200).json(installations)
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
});

module.exports = router;