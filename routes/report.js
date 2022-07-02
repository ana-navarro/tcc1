const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getFinalReports, getFinalReport, createFinalReport, updateFinalReport, deleteFinalReport } = require("../controllers/finalReportController");
// const { getTechnicals, createTechnical, updateTechnical, deleteTechnical, getTechnical } = require("../controllers/technicalController");
// const { getFinatials, getFinatial, createFinatial, updateFinatial, deleteFinatial } = require("../controllers/finantialController");
const { generatePDF } = require("./middlewares/pdf-generate");

router.get("/final/", checkToken, getFinalReports);
router.get("/final/:id", checkToken, getFinalReport);
router.post("/final/add", checkToken, createFinalReport);
router.put("/final/:id", checkToken, updateFinalReport);
router.delete("/final/:id", checkToken, deleteFinalReport);
router.get("/final/pdf/:id", generatePDF);

// router.get("/technical/", checkToken, getTechnicals);
// router.post("/technical/add", checkToken, createTechnical);
// router.put("/technical/:id", checkToken, updateTechnical);
// router.delete("/technical/:id", checkToken, deleteTechnical);
// router.get("/technical/:id", checkToken, getTechnical);

// router.get("/finantial/", checkToken, getFinatials);
// router.get("/finantial/:id", checkToken, getFinatial);
// router.post("/finantial/add", checkToken, createFinatial);
// router.put("/finantial/:id", checkToken, updateFinatial);
// router.delete("/finantial/:id", checkToken, deleteFinatial);

module.exports = router