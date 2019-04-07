let winston = require("winston");
const infoLogger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'application.log' })
    ]
});
const debugLogger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'application.log' })
    ]
});

const errorLogger = winston.createLogger({
    level: 'error',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log' })
    ]
});

module.exports = function () {
    info  = infoLogger;
    error  = errorLogger;
    debug  = debugLogger;
}