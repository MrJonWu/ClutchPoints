const axios = require('axios');
const sportsRadar = require('../../config/config.json');

module.exports = {
  getData: (req, res, next) => {
    return axios.get('https://api.sportradar.us/nba-t3/games/f5d5c09e-1d30-42af-9ddc-f0a4d6a27d87/summary.json?api_key=' + sportsRadar.apiKey)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
    });
  }
};