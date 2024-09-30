const { json } = require("express");
const express = require("express")
const app = express();
const userRouter = require("./routers/userRouter")


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/user",userRouter);
app.get("/",(req,res)=>
{
    res.send("use /user for user");
})
app.listen(8080,()=>console.log("server running on port 880"))