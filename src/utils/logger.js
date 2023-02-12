const winston = require("winston");


const { format } = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "dddd, DD-MM-YYYY HH:mm:ss A",
    }),
    format.json()
  ),
  defaultMeta: { service: "IMS-Backend" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log", level: "info" }),
  ],
});

logger.info = (message) => {
  logger.log({
    level: "info",
    message: message,
  });
};

logger.error = (message) => {
  logger.log({
    level: "error",
    message: message,
  });
};
module.exports = logger;
