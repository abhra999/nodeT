const app=require('express')();
const winston = require('winston');
require('dotenv').config();

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston.format.json()
          }),        
        ]
  });

  if (process.env.NODE_ENV === 'development') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }


app.get('/',(req,res,next)=>{
    if(!req.admin){
        logger.log({
            level: 'error',
            message: 'admin not found'
          });
         
    }
    res.send(`user admin ${req.admin}`);
    
    next();
})
app.listen(3000);