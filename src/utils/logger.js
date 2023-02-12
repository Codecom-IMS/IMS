const winston = require("winston");

const { transports, createLogger, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "dddd, DD-MM-YYYY HH:mm:ss A",
    }),
    format.json()
  ),
  defaultMeta: { service: "IMS-Backend" },
  transports: [
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log", level: "info" }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

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
