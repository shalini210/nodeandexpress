const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/",(req,res)=>
{
    res.send(userController.getall())
})
router.get("/findone",(req,res)=>
{
    res.send(userController.findone(req.query.id))
})
router.post("/",(req,res)=>
{
    // console.log(req.body)
    let obj = {id:req.body.id,uname:req.body.uname,email:req.body.email}
    let r  = userController.insert(obj)
    res.send("output is " +r )
})
module.exports = router