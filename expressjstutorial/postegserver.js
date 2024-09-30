
const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extented:true}));

app.get("/",(req,res)=>
{
    res.send("for addition use /add with post method ");
})
app.post("/add",(req,res)=>
{
    // console.log(req.body)
    let x = req.body.a;
    let y = req.body.b;
    let sum = parseInt(x)+parseInt(y);
    res.send("sum is "+ sum)
})

app.listen("8080",()=>console.log("server running on port 8080"));
