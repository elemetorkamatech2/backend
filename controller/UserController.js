//const logger = require('../logger');
const listUsres = [
  { id: 1, name: 'lea', mail: 'fff@ddd', password: '999999' },
  { id: 2, name: 'Yehudit', mail: 'fff@ddd', password: '999999' },
  { id: 3, name: 'Rivky', mail: 'fff@ddd', password: '055332545' },
];
module.exports = {
  getAll: async (req, res) => {
   // logger.info('Getting all users');
    res.send(listUsres);
  },
};
