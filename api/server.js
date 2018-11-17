'use strict';

const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const App = require("./routes/app");
// const debug = require("debug")("node-angular");
const http = require("http");
const express = require('express');

const app = express(); 

app.use('/healthcheck', require('./routes/index').router);
app.use('/login', require('./routes/login').router);
app.use('/books', require('./routes/books').router);
app.use('/authors', require('./routes/authors').router);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [
      { message: 'unauthorized' },
    ];

    res.status(401).json({ errors });
  }
});




const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// const onError = error => {
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };

// const onListening = () => {
//   const addr = server.address();
//   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//   debug("Listening on " + bind);
// };

const port = normalizePort(process.env.PORT || "3001");
App.set("port", port);

const server = http.createServer(App);
// server.on("error", onError);
// server.on("listening", onListening);
server.listen(port);

module.exports = app;
