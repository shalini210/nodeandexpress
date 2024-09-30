const express = require("express")
const app = express();
const studentRouter = require("./routers/StudentRouter.js")
const teacherrouter = require("./routers/teacherRouter.js")
app.use("/student",studentRouter)
app.use("/teacher",teacherrouter)
app.get("/",function(req,res)
{
    res.send("use/teacher for teacher and user /student for student ");
})

app.listen(8080,()=>console.log("running on 8080"));