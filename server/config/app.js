var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  var port = process.env.PORT || config.port;
  app.listen(port, function() {
    console.log('App listening on port', port);
  });
};

