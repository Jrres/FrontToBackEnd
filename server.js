
let express = require ("express");
let fs = require("fs")
let path = require("path")

const router = express.Router();

   
    //crud server
    let hostname = 'localhost'
    let app = express(); 
    let port =3000;
    let data = [];

    
    router.get("/",(req,res)=>{
        console.log(__dirname)
        res.sendFile(path.join(__dirname+'/index.html'));
        })
        
let name, lastname, age, dob, email

    router.get("/index.js",(req,res)=>{
        res.sendFile(path.join(__dirname+'/index.js'));
        
         name = req.name 


    }
    )
    console.log(name)
    router.post("/",(req,res)=>{
        res.send(name)
    })

    router.get("/readAcc",(req,res)=>{//read
        res.send(data);
        res.send("posting user info to page:")
       
        
    }
    )
  
    
    app.use('/',router)
    app.listen(process.env.port || 3000,()=>
    {
        console.log(`Server running at ${hostname}:${port}` )
       
      
         
      
    });


