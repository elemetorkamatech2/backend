// const winston = require('winston');
// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.Console()
//     ]
// });
// module.exports = logger;
const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => (
      `${timestamp} ${level}: ${message}`
    )),
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/dev.log' }),
    new winston.transports.Console(),
  ],
});

logger.stream = {
  write(message) {
    logger.info(message);
  }
};

module.exports = logger;