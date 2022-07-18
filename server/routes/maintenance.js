const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { getMaintenance, getMaintenances, createMaintenance, updateMaintenance, deleteMaintenance } = require("../controllers/maintenanceController");

router.get("/", getMaintenances);
router.get("/:id", getMaintenance);
router.post("/create", createMaintenance);
router.put("/update/:id", updateMaintenance);
router.delete("/delete/:id", deleteMaintenance);

module.exports = router;