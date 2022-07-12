const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getCompanies, createCompany, updateCompany, deleteCompany, getCompany } = require("../controllers/companyController");
const { createInstallation, updateInstallation, deleteInstallation, getInstallations } = require('../controllers/installationController');

router.get("/", checkToken, getCompanies);
router.post("/create", checkToken, createCompany);
router.put("/:id", checkToken, updateCompany);
router.delete("/:id", checkToken, deleteCompany);
router.get("/:id", checkToken, getCompany);

router.get("/installations/", checkToken, getInstallations);
router.post("/installation/add", checkToken, createInstallation);
router.put("/installation/:id", checkToken, updateInstallation);
router.delete("/installation/:id", checkToken, deleteInstallation);

module.exports = router;