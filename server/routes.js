const getGameData = require('./controllers/getGameData');

module.exports = function(app, express) {
  app.get('/api/getGameData', getGameData.getData);
};