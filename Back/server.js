const http = require('http');
const express = require('express');
const cors = require('cors');

class Server {
    constructor(dirname) {
        this.app = express();
        this.httpServer = http.createServer(this.app);
        this.port = process.env.PORT || 8080;
        this.routes = {
            session: '/api/session',
            auth: '/api/auth'
        };
        this.middlewares(dirname);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        Object.keys(this.routes).forEach((key) => {
            this.app.use(this.routes[key], require(`./routes/${key}`));
        });
    }

    listen() {
        this.httpServer.listen(this.port, () => {
            console.log('Running on port', this.port);
            console.log('corriendo desde', new Date());
        });

    }
}

module.exports = Server;