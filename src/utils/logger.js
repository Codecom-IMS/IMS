const winston = require('winston');

const { transports, createLogger, format } = require('winston');

const logger = winston.createLogger({
level: 'info',
format: format.combine(format.timestamp({
    format: 'dddd, DD-MM-YYYY HH:mm:ss A'
}), format.json()),

defaultMeta: { service: 'IMS-Services' },
transports: [
new winston.transports.File({ filename: 'error.log', level: 'error' }),
new winston.transports.File({ filename: 'info.log' , level: 'info'})
]
});

if (process.env.NODE_ENV !== 'production') {
logger.add(new winston.transports.Console({
format: winston.format.simple()
}));
}

logger.info = (message) => {
logger.log({
level: 'info',
message: message
});
};

logger.error = (message) => {
logger.log({
level: 'error',
message: message
});
};

logger.warn = (message) => {
logger.log({
level: 'warn',
message: message
});
};

module.exports = logger;