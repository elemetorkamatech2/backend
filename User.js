// const logger = require('./logger');
class User {
  constructor(id, name, mail, password) {
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.password = password;
    // logger.info(`User ${name} created with id ${id}`);
  }
}
module.exports = User;
