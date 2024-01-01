const app=require('express')();
const winston = require('winston');
require('dotenv').config();

var logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'rejections.log' })
  ]
});

app.get('/',(req,res,next)=>{

   
    fetch('http://examplemydomain.com')
    res.send(`user admin ${req.admin}`);
    
    next();
})
app.listen(3000);