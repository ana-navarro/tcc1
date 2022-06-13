const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getCompanies, createCompany, updateCompany, deleteCompany, getCompany } = require("../controllers/companyController");

router.get("/", checkToken, getCompanies);
router.post("/create", checkToken, createCompany);
router.put("/:id", checkToken, updateCompany);
router.delete("/:id", checkToken, deleteCompany);
router.get("/:id", checkToken, getCompany);

module.exports = router;