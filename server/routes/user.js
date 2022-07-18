const router = require("express").Router({ mergeParams: true });
const { authMiddleware } = require("./middlewares/auth");
const { editProfile, getUsers, deleteUser, getUser, changePassword, getUserProfile } = require("../controllers/userController");
const User = require("../models/User");
const Company = require("../models/Company");

router.get("/", getUsers);
router.put("/edit-profile/:id", editProfile);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/profile", getUserProfile);


router.put("/reset/:id", changePassword);

router.post("/company/add/:id", async (req, res) => {
    try {
        const company = await Company.findById(req.body.companyId);
        const userCompany = await User.findByIdAndUpdate(req.params.id, {
            companyId: company,
            companyId: company
        });
        const saveCompany = await userCompany.save()

        res.json(saveCompany);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
});

router.get("/company/list/:id", async (req, res) => {
    const { firstname, lastname, email, companyId, ...others } = req.query;
    try{
        const users = await User.find({
            ...others,
        }).where('companyId').equals(req.params.id);
        res.status(200).json(users);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
});


module.exports = router;