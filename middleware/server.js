// const express = require('express')
// const app = express()
// //middleware:log request method and url 
// function logger (req,res,next){
// console.log(`${req.method} ${req.url} ${req.body}`);
// next()
// }
// app.use(logger)
// app.get('/', (req,res)=>{
//     res.send('hello from the middleware')
// })


// app.listen(3000,() =>{
//     console.log('app is listening on port 3000');
    
// })
//middleware to add timestamp to the request 
// const express = require('express')
// const app = express()
// function addTimeStamp(req,res,next){
//     req.reuestTime=new Date()
//     next()
// }
// app.use(addTimeStamp)
// app.get('/',(req,res)=>{
//     res.send(`requested at:${req.reuestTime} `)
// })
// app.listen(3000,()=>{
// console.log('server is listening on port 3000');

// }
// )
//middleware to parse json body 
// const express = require('express')
// const app = express()
// //built-in json parser middleware
// app.use(express.json())
// app.post('/data',(req,res)=>{
//     res.send(`received data is:${JSON.stringify(req.body)}`)
// })
// app.listen(3000,()=>{
// console.log('server is listening on port 3000');

// })
//middleware for request validation 
// const express=require('express')
// const app = express()
// app.use(express.json())
// function validateRequest(req,res,next){
//     if(!req.body.name){
//         return res.status(400).send('missing name field')
//     }
//     next()
// }
// app.post('/user',validateRequest,(req,res)=>{
//     res.send(`user created:${req.body.name}`)
// })
// app.listen(3000,()=>{
//     console.log('server is listening ');
    
// })
//middleware to handel unauthorized access
// const express = require('express')
// const app = express()
// function checkAuth(req,res,next){
//     if(req.query.token !== '12345'){
//         return res.status(400).send('unauthorized')
//     }
//     next()
// }
// app.get('/secure',checkAuth,(req,res)=>{
//     res.send('you are authorized')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//middleware to log request headers 
// const express= require('express')
// const app = express()
// function logHeaders(req,res,next){
// console.log(`request headers:` ,req.headers);
// next()
// }
// app.use(logHeaders)
// app.get('/',(req,res)=>{
//     res.send('Headers logged')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//chained middleware 
// const express = require('express')
// const app = express()
// function middleware1(req,res,next){
//     console.log('this is from middleware 1');
//     next()
// }
// function middleware2(req,res,next){
//     console.log('this is from middleware 2');
//     next() 
// }
// app.use(middleware1)
// app.use(middleware2)
// app.get('/',(req,res)=>{
//     res.send('both the middleware worked correctly')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
// const express = require('express')
// const app = express()
// app.get('/error',(req,res,next)=>{
//     next(new Error('something went wrong'))
// })
// //error handling middleware must have 4 parameter
// app.use((err,req,res,next)=>{
//     console.error(err.message)
//     res.status(500).send('internal server error')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//Middleware to block specific user-agent 
// const express = require('express')
// const app = express()
// function blockBot(req,res,next){
//     if(req.headers['user-agent'].includes('Chrome')){
//       return res.status(500).send('Bots are not allowed')
// }
// next()
// }
// app.use(blockBot)
// app.get('/',(req,res)=>{
//     res.send('welcome home')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//Middleware for setting custom response header 
// const express= require('express')
// const app = express()
// function  setcustomHeader(req,res,next){
//     res.setHeader('X-Powered-By', 'Express Middleware')
//     next()
// }
// app.use(setcustomHeader)
// app.get('/',(req,res)=>{
//     res.send('custom header set')
// })
// app.listen(3000,()=>{
// console.log('server is listening on port 3000');

// })
//Rate limiting middleware 
// const express = require('express')
// const app = express()
// let requestCount = 0 
// function rateLimitter(req,res,next){
// requestCount++;
// if(requestCount>10){
//     return res.status(429).send('Too many request')
// }
// next()
// }
// app.use(rateLimitter)
// app.get('/',(req,res)=>{
//     res.send("hello request limit not exceed")
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//middleware for CORS(cross-origin Resource Sharing)
// const express = require('express')
// const app = express()
// function allowCORS(req,res,next){
// res.setHeader('Access-Control-Allow-Origin','*')
// res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
// next();
// }
// app.use(allowCORS)
// app.get('/',(req,res)=>{
//     res.send('CORS headers set')
// })

// app.listen(3000,(req,res)=>{
//     console.log('server is listening on port 3000');
    
// })
//middleware to log request into a file 
// const express = require('express')
// const fs = require('fs')
// const app = express()
// function logToFile(req,res,next){
//     const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`
//     fs.appendFileSync('server.log',log)
// }
// app.use(logToFile)
// app.get('/',(req,res)=>{
// res.send('Logged request to file')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//middleware for ip filtering 
// const express = require('express');
// const app = express();

// function blockIPs(req, res, next) {
//   const blockedIPs = '127.0.0.2'
//   if(blockedIPs.includes(req.ip)){
//     return res.status(403).send('Access Denied')
//   }
//   next()
// }

// app.use(blockIPs);

// app.get('/', (req, res) => {
//   res.send('Your IP is allowed.');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
// const express = require('express')
// const app = express()
// function enforceHTTPS(req,res,next){
//     if(req.headers['x-forwarded-proto'] !== 'https'){
//         return res.status(403).send('Please use HTTPS')
//     }
//     next()
// }
// app.use(enforceHTTPS)
// app.get('/',(req,res)=>{
//     res.send('secure connection verified')
// })
// app.listen(3000,()=>{
// console.log('server is listening on 3000');

// })
//request timeout middleware 
// const express = require('express')
// const app = express()
// function requestTimeout(req,res,next){
//     res.setTimeout(5000,()=>{
//         return res.status(408).send('Request timed out')
//     })
//     next()
// }
// app.use(requestTimeout)
// app.get('/',(req,res)=>{
//     setTimeout(()=>{
//         res.send('request completed')
//     },4000)
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//middleware for json response wrapper
// const express = require('express')
// const app = express()
// function jsonResponseWrapper(req,res,next){
//     res.success = (data) =>{
//         res.json({status:'success',data})
//     }
//     next()
// }
// app.use(jsonResponseWrapper)
// app.get('/',(req,res)=>{
//     res.success({message:'hello'})
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//middleware to disable chacing 
// const express = require('express')
// const app = express()
// function disableCache(req,res,next){
//     res.setHeader('Cache-Control','no-store')
//     next()
// }
// app.use(disableCache)
// app.get('/',(req,res)=>{
//     res.send('caching is disable for this response')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//conditional middleware execution 
// const express = require('express')
// const app = express()
// function logAdminRequest(req,res,next){
//     if(req.path.startsWith('/admin')){
//         console.log(`admin route accessed:${req.path}`);
//     }
//     next()   
// }
// app.use(logAdminRequest)
// app.get('/admin/dashboard',(req,res)=>{
//     res.send('Admin Dashboard')
// })
// app.get('/home',(req,res)=>{
//     res.send('route to the home path')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//Global error handler for unhandled routes
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.send('Main route')
// })
// app.use((req,res)=>{
//     res.status(404).send('Resource not found')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//api key validation 
// const express = require('express')
// const app = express()
// function apiKeyCheck(req,res,next){
//     const apiKey = req.headers['x-api-key']
//     if(apiKey !=12345){
//         return res.status(403).send('invalid api key')
//     }
//     next()
// }
// app.use(apiKeyCheck)
// app.get('/',(req,res)=>{
//     res.send('API key validated')
// })
// app.listen(3000,()=>{
//     console.log('server is listening on port 3000');
    
// })
//content type enforcement middleware 
const express = require('express');
const app = express();
app.use(express.json());

function requireJsonContent(req, res, next) {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).send('Server requires application/json content type.');
  }
  next();
}

app.post('/data', requireJsonContent, (req, res) => {
  res.send('Valid JSON content received.');
});

app.listen(3000, () => console.log('Server running on port 3000'));
