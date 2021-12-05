
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8081;


/**
 * Model of a node server instance.
 */
class Server {
  /**
    * constructor
  */
  constructor() {
    this.app = express();
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);
    this.port = port;
    this.paths = {};
    this.middlewares();
    this.routes();
    this.sockets();
  }


  /**
    * connection to DB
  */
  async connectDB() {
    await dbConnection();
  }

  /**
    * middlewares
  */
  middlewares() {
    const {app} = this;

    app.use(cors());
    app.use(express.static('public'));
  }

  /**
    * routes
  */
  routes() {
    // app.use(paths.auth, require("../routes/auth"));
  }

  /**
    * sockets
  */
  sockets() {
    this.io.on('connection', (socket) => {
      console.log('cliente conectado');

      socket.on('disconnect', () => {
        console.log('cliente desconectado');
      });
    });
  }


  /**
    * Server instance
  */
  listen() {
    this.server.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
