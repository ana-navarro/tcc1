const router = require("express").Router();
const { checkToken } = require("./middlewares/auth");
const { addCompany, editProfile, getUsers, deleteUser, getUser, changePassword } = require("../controllers/userController");

router.get("/", checkToken, getUsers);
router.put("/:id", checkToken, editProfile);
router.delete("/:id", checkToken, deleteUser);
router.get("/:id", checkToken, getUser);
router.put("/company/add/:id", checkToken, addCompany);
router.put("/change-password/:id", checkToken, changePassword);

module.exports = router;