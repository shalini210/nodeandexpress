const { json } = require("express");
const express = require("express")
const app = express();

app.get("/",function (req,res)
{
    res.send("welcomt to api")
// res.sendFile(__dirname+"/form.html")
})

app.get("/calculate",function(req,res)
{
    // res.sendFile(__dirname+"/calculate.html")
})
app.get("/add",function(req,res)
{
    var x = parseInt(req.query.a)
    var y = parseInt(req.query.b)
    var sum = x+y;
    res.send("sum is "+ sum)
    // res.send(JSON.stringify(req.query))
})
app.get("/show",(req,res)=>
{
    console.log(req.query)
    res.send("hello "+ req.query.txtname );
})

app.listen(8080,()=>console.log("server running "))