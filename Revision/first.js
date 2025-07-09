const express = require('express')
const app = express()
app.use(express.json())

//middleware:log request method and url 
// function logger(req,res,next){
//     console.log(`${req.url} , ${req.method} ,${req.body}`);
//     next()
    
// }
// app.use(logger)
// app.get('/',(req,res)=>{
//     res.send("Hello from the middleware")
// })
// function addTimeStamp(req,res,next){
//     req.requestTime = new Date()
//     next()
// }
// app.use(addTimeStamp)
// app.get('/' ,(req,res) =>{
//     res.send(`server is requested at this time: ${req.requestTime}` );
    
// })
//built-in json parse middleware
// app.use(express.json())
// app.post('/data' ,(req,res)=>{
//     res.send(`received data is :${JSON.stringify(req.body)}`)
// })
// function validateRequest(req,res,next){
//     if(!req.body.name){
//         return res.status(400).send('missing name field ')
//     }
//     next()
// }
//     app.post('/user' ,validateRequest, (req,res)=>{
//         res.send(`user is created at: ${req.body.name}`)
//     })
// function checkAuth(req,res,next){
//     if(req.query.token !== '12345'){
//         return res.status(400).send('unauthorized')
//     }
//     next()
// }
// app.get('/secure' , checkAuth , (req,res)=>{
//     res.send('You are authorized')
// })
// function logheaders(req,res,next){
//     console.log("request header is" , req.headers);
//     next()  
// }
// app.get('/' , logheaders,(req,res)=>{
//     res.send("headers logged")
// })
//chained middleware 
// function middleware(req,res,next){
//     console.log('This is from middleware 1');
//     next()
// }
// function middleware1(req,res,next){
//     console.log("this is from middleware 2");
//     next() 
// }
// app.get('/', middleware,middleware1,(req,res)=>{
//     res.send('both the middleware work fine')
// })
// app.get('/error' , (req,res,next)=>{
//     next(new Error("something went wrong"))
// })
// app.use((err,req,res,next)=>{
//     console.error(err.message)
//     res.status(500).send('internal server error')
// })
// middleware to block specific user-agent
// function blockBot(req,res,next){
//     if(req.headers['user-agent'].includes('Chrome')){
//         return res.status(500).send('Bots are not allowed')
//     }
//     next()
// }
// app.get('/',(req,res)=>{
//     res.send('welcome Home')
// })
//  let requestCount = 0
// function rateLimitter(req,res,next){
//    requestCount++;
//    if(requestCount > 10){
//     return res.status(429).send('too Many request')
//    }
//    next()

// }
// app.get('/' , rateLimitter, (req,res)=>{
//     res.send('Hello request limit not exceed')
// })
// function allowedCORS(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin' , '*')
//     res.setHeader('Access-Control-Allow-Method' , GET , POST, PUT, DELETE)
//     next()
// }
// app.get('/' , (req,res)=>{
//     res.send('CORS headers Set')
// })
// function blockedIPs(req,res,next){
//     const blockedIPs = '127.0.0.2'
// if(blockedIPs.includes(req.ip)){
//     return res.status(400).send("Access Denied")
// }
// next()
// }
// app.get('/' , blockedIPs,(req,res)=>{
//     res.send('your ip is allowed')
// })
// app.enable('trust proxy'); // <== Important!

// function enforceHTTPS(req,res,next){
//     if(req.headers['x-forwarded-proto'] !== 'https'){
//         return res.status(403).send('please use https')
//     }
//     next()
// }
// app.get('/' , (req,res)=>{
//     res.send('secure connection ')
// })
// function requestTimeout(req,res,next){
//     res.setTimeout(5000,()=>{
//         return res.status(408).send("request timed out")
//     })
//     next()
// }
// app.get('/' , requestTimeout, (req,res)=>{
//     setTimeout(()=>{
//         res.send('request completed')
//     },6000)
// })
//middleware for jsonResponseWrapper 
// function jsonResponseWrapper(req,res,next){
//     res.success = (data) =>{
//         res.json({status: 'success',data})
//     }
//     next()
// }
// app.get('/' , jsonResponseWrapper ,(req,res)=>{
//     res.success({message :'Hello'})
// })
//middleware to disable caching 
// function disableCache(req,res,next){
//     res.setHeader('Cache-control', 'no-store')
//     next()
// }
// app.get('/', disableCache,(req,res)=>{
//     res.send('Caching is disable for this response')
// })
// conditional middleware 
// function logAdminRequest(req,res,next){
//     if(req.path.startsWith('/admin')){
//         console.log(`admin route accessed:${req.path}`);
        
//     }
//     next()
// }
// app.get('/admin/dashboard',logAdminRequest,(req,res)=>{
//     res.send('route to the admin path')
// })
// app.get('/home' , (req,res)=>{
//     res.send('route to the home path')
// })
//global error handler 
// app.get('/' , (req,res)=>{
//     res.send('Main Route')
// })
// app.use((req,res)=>{
//     res.status(400).send("Resource not Found")
// })
// app.get('/home' , (req,res)=>{
//     res.send("welcome to the home route")   // this route wont work here because we use global error handler middleware and above of this all the route will work and below this no route will work 
// })
//api key validation 
// function apiKeyCheck(req,res,next){
//     const apiKey = req.headers['x-api-key'] 
//     if(apiKey !== '12345'){
//         return res.status(403).send('invalid api key')
//     }
// }
// app.get('/', apiKeyCheck, (req,res)=>{
//     res.send("Api key validated")
// })
// content type inforcement middleware 
function requireJsonContent(req,res,next){
    if(req.headers['content-type'] !== 'application/json'){
        return res.status(415).send('Server require application/json content type')
    }
    next()
}
app.post('/data' , requireJsonContent , (req,res) =>{
    res.send('Valid JSON content received')
})
app.listen(3000,()=>{
    console.log("server is listening on port 3000");
    
})