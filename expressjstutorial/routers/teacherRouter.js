const express = require("express")
var router = express.Router();
router.get("/add",function(req,res)
{
    res.send("add of teacher")
})
router.get("/delete",function(req,res)
{
    res.send("delete of taeacher")
})
module.exports = router