const router = require("express").Router();
const {addincome, getincome, deleteincome} = require("../controller/income");
const {addexpense, getexpense, deleteexpense} = require("../controller/expense")
router.post("/add-income", addincome);
router.get("/get-income",getincome);
router.delete("/delete-income/:id",deleteincome)
router.post("/add-expense",addexpense)
router.get("/get-expense",getexpense)
router.delete("/delete-expense/:id",deleteexpense);
module.exports = router;
