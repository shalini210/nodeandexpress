const express = require("express")
const router = express.Router();
const studentController = require("../controllers/studentController.js")
router.get("/",(req,res)=>
{
    let d = studentController.getall();
    res.send(d);
})
router.post("/",(req,res)=>
{
    res.send("add student with post method ")
})
router.delete("/",(req,res)=>
{
    res.send("using delete method for delete")
})
router.put("/",(req,res)=>
{
    res.send("this is for update ")
})
module.exports = router