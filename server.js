const express = require('express');
const next = require('next');

const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/page2', (req, res) => {
      return app.render(req, res, '/Page2');
    });
    
    server.get('/page3', (req, res) => {
      return app.render(req, res, '/Ohueah');
    });

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) {
        console.log('ERROR', err);

        console.log(`Listen on port: ${PORT}`);
      }
    });
  });
