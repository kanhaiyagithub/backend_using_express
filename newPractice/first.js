const express = require('express')
const path = require('path')
const app = express()
//logging method 
// const logger = (req,res,next) =>{
//     console.log(`the method is ${req.method} and its url is ${req.url}`);
//     next()
// }
// app.use(logger)
//request time logger 
// const timeLogging = (req,res,next) =>{
//     req.requestTime = new Date().toISOString();
//     next()
// }
// app.use(timeLogging)
// app.get('/' ,(req,res)=>{
//     res.send(`Request received at ${req.requestTime}`)
// })
// const maintainence = (req,res,next) =>{
// //     return res.status(500).send('Site is under maintainance')
// return res.status(500).send("Site is under Maintainence")
//  }
// app.use( maintainence);
// app.get('/' , (req,res)=>{
//     res.send("This will never run")
// })
app.use(express.static(path.join(__dirname, 'public')));
app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
})