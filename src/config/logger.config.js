const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb')

const allowedTransports = [];

// the below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    // this formating is specific to logs printing on console transport.
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`)
    )
}));

// the below transport configuration enables logging in mongodb database
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}))

// the below transport configuration enables logging in a file named app.log
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    // this default formating will be applied to all the transports which do not have thier own formating.
    format: winston.format.combine(
        // first argument to the combine method is defining how the timestamp should come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
    ),
    transports: allowedTransports
})

module.exports = logger