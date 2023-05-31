const winston = require('winston');

class logger {
  constructor() {
    this.logger = winston.createLogger({
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

    this.logger.stream = {
      write(message) {
        this.logger.info(message);
      },
    };
  }

  info(message) {
    this.logger.info(message);
  }

  error(message) {
    this.logger.error(message);
  }

  warn(message) {
    this.logger.warn(message);
  }

  debug(message) {
    this.logger.debug(message);
  }
}

module.exports = logger;