// // const express = require('express')
// // const app = express()
 
// // const logger =(req,res,next) =>{
// // console.log(`${req.method}   and${req.url}`);
// // next()
// // }
// // app.use(logger)

// // app.listen(3000 , () =>{
// //     console.log("server is listening on port 3000");
    
// // })
// // const express = require('express')
// // const app = express()

// // const timeLogger = (req,res,next) =>{
// // req.requestTime = new Date().toUTCString()
// // next()
// // }
// // app.use(timeLogger)
// // app.get('/',(req,res)=>{
// //     res.send(`request received at ${req.requestTime}`)
// // })
// // const timeLogger = (req,res,next) =>{
// //     req.requestTime = new Date().toISOString
// //     next()
    
// // }
// // app.get('/',(re))
// // app.listen(3000,()=>{
// //     console.log("server is listening on port 3000");
    
// // })
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();

// const SECRET = 'supersecret';

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).send('Token missing');

//   try {
//     req.user = jwt.verify(token, SECRET);
//     next();
//   } catch (err) {
//     return res.status(403).send('Invalid Token');
//   }
// };

// app.get('/login', (req, res) => {
//   const token = jwt.sign({ name: 'Kanhaiya' }, SECRET, { expiresIn: '1h' });
//   res.send({ token });
// });

// app.get('/profile', verifyToken, (req, res) => {
//   res.send(`Hello ${req.user.name}`);
// });
// app.get('/about-us' ,verifyToken, (req,res) =>{
//     res.send(`Hello ${req.user.name}`)
// });

// app.listen(5000, () => console.log('Server running on port 5000'));
