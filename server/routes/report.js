const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getFinalReports, getFinalReport, createFinalReport, updateFinalReport, deleteFinalReport } = require("../controllers/finalReportController");
const { getTechnicals, createTechnical, updateTechnical, deleteTechnical, getTechnical } = require("../controllers/technicalController");
const { getFinatials, getFinatial, createFinatial, updateFinatial, deleteFinatial } = require("../controllers/finantialController");
const { generatePDF } = require("./middlewares/pdf-generate");

router.get("/final/", getFinalReports);
router.get("/final/:id", getFinalReport);
router.post("/final/add", createFinalReport);
router.put("/final/:id", updateFinalReport);
router.delete("/final/:id", deleteFinalReport);
router.get("/final/pdf/:id", generatePDF);

router.get("/technical/", getTechnicals);
router.post("/technical/add", createTechnical);
router.put("/technical/:id", updateTechnical);
router.delete("/technical/:id", deleteTechnical);
router.get("/technical/:id", getTechnical);

router.get("/finantial/", getFinatials);
router.get("/finantial/:id", getFinatial);
router.post("/finantial/add", createFinatial);
router.put("/finantial/:id", updateFinatial);
router.delete("/finantial/:id", deleteFinatial);

module.exports = router