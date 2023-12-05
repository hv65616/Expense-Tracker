const router = require("express").Router();
const {addincome} = require("../controller/income");
router.post("/add-income", addincome);
module.exports = router;
