const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getMaintenance, getMaintenances, createMaintenance, updateMaintenance, deleteMaintenance } = require("../controllers/maintenanceController");

router.get("/", checkToken, getMaintenances);
router.get("/:id", checkToken, getMaintenance);
router.post("/create", checkToken, createMaintenance);
router.put("/update/:id", checkToken, updateMaintenance);
router.delete("/delete/:id", checkToken, deleteMaintenance);

module.exports = router;