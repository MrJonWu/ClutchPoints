const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, '../dist')));

require('./routes.js')(app, express);

app.listen(port, function() {
  console.log('Server is listening on ' + port);
});

module.exports = app;
module.exports = express;