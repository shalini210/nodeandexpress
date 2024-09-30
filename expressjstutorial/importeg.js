const express = require("express")
const app = express();
const stringfun = require("./stringfun")
app.get("/",(req,res)=>
{
    res.send("this is import eg ");
})
app.get("/reverse",(req,res)=>
{
    
    var s = req.query.name;
    // var a = parseInt(req.query.a);
    s = stringfun.strreverse(s);
    res.send(s);
})
app.listen(8080,()=>console.log("server running"));