const app=require('express')();
const winston = require('winston');
require('dotenv').config();

const { combine, timestamp, printf, colorize, align } = winston.format;

const transports = {
    console: new winston.transports.Console(),
    file:  new winston.transports.File({filename: 'error.log',level: 'error'}),
  };

  winston.loggers.add('WriteLogger', {
    level:'error',
    file:'error.log',
    format: winston.format.json(),
    transports: [transports.file],
  });
  winston.loggers.add('ConsoleLogger', {
    format: winston.format.json(),
    transports: [transports.console],
  });

  const writeLogger = winston.loggers.get('WriteLogger');
  const consoleLogger = winston.loggers.get('ConsoleLogger');

app.get('/',(req,res,next)=>{

    consoleLogger.info('Info message');
    writeLogger.error('Error message');

    res.send(`user admin ${req.admin}`);
    
    next();
})
app.listen(3000);