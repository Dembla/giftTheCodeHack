'use strict';

const bodyParser = require('body-parser');
// const app = express();
// const express = require('express');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const App = require("./routes/app");
// const debug = require("debug")("node-angular");
const http = require("http");
const express = require('express');

const app = express(); 

app.use('/healthcheck', require('./routes/index').router);
app.use('/registered', require('./routes/registered').router);
// const express = require('express');

// const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/healthcheck', require('./routes/index').router);



app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [
      { message: 'unauthorized' },
    ];

    res.status(401).json({ errors });
  }
});
 

module.exports = app;
