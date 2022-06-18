const router = require("express").Router({ mergeParams: true });
const { checkToken } = require("./middlewares/auth");
const { editProfile, getUsers, deleteUser, getUser, changePassword } = require("../controllers/userController");
const User = require("../models/User");
const Company = require("../models/Company");

router.get("/", checkToken, getUsers);
router.put("/edit-profile/:id", checkToken, editProfile);
router.delete("/:id", checkToken, deleteUser);
router.get("/:id", checkToken, getUser);


router.put("/reset/:id", checkToken, changePassword);

router.put("/company/add/:id", checkToken, async (req, res) => {
    try {
        const company = await Company.findById(req.body.companyId);
        const userCompany = await User.findByIdAndUpdate(req.params.id, {
            companyId: company
        });
        await userCompany.save()
        res.json(userCompany);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Error!");
    }
});

router.get("/company/list/:id", checkToken, async (req, res) => {
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