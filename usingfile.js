import http from "http"
import fs from "fs"
http.createServer(function(req,res)
{
    if(req.url=="/")
    {
        res.write("<a href='/aboutus'>About us </a>")
        res.write("<a href='/contact'>Contact us </a>")
    }

    if(req.url=="/read")
    {
        // var filedata = fs.readFileSync("demo.txt");
        // console.log(filedata.toString());
        var data ="";
        fs.readFile("demo.txt",async (err,d)=>
        {
            if(err)
            {console.log("error in reading file" + err)}
            else
            {
     console.log(d.toString())   
            }
        })
        for(var i=1;i<=5 ;i++)
        {
            console.log(i);
        }
        
      
    }
    

if(req.url =="/aboutus")
{
    
    res.write("<h1>About <br>world </h1> ")
}


if(req.url =="/contact")
{
    
    res.write("<h1>contact</h1> ")
}

res.end();

}).listen(8080,()=>console.log("running"))