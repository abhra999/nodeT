const app=require('express')();
const winston = require('winston');
require('dotenv').config();

const { combine, timestamp, printf, colorize, align } = winston.format;

const transports = {
    console: new winston.transports.Console(),
    file:  new winston.transports.File({filename: 'error.log',level: 'error'}),
  };

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    transports.console,
    transports.file
  ],
});


app.get('/',(req,res,next)=>{

    logger.info('Info message');
    logger.error('Error message');
    logger.warn('Warning message');

    res.send(`user admin ${req.admin}`);
    
    next();
})
app.listen(3000);