const winston = require('winston'); 
const logger = winston.createLogger({ transports: [ new winston.transports.Console()  ] });
const {createLogger,format,transports, debug} = require('winston');
module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.splat(),
        format.colorize(),
        format.timestamp(),
        //format.printf(info => `[${info.timestamp}] ${level} ${info.message}`)
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),

    format: format.combine(
        format.simple(),
        format.timestamp(),
        //format.printf(info => `[${info.timestamp}] ${level} ${info.message}`)
        format.printf(debug => `[${debug.timestamp}] ${debug.level} ${debug.message}`)
    ),

   transports:[
       new transports.File({
        maxsize:5120000,
        maxFiles:5,
        filename:`/var/log/gncc-api/api.log`,
        level: 'info'
       }),
       new transports.File({
           level:'debug',
           filename:`/var/log/gncc-api/api.log`,
           handleExceptions: true
       }

       ),
       new transports.File({
        level:'error',
        filename:`/var/log/gncc-api/api.log`,
        handleExceptions: true
    }

    )
   ] 
});
