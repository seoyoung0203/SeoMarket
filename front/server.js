// next와 express를 연결

const express = require('express');
const next = require('next');
const morgan = require('morgan');
//const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// const expressSession = require('express-session');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();
// dotenv.config();

app.prepare().then(() => {
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());

    server.get('/item/:itemIndex', (req, res) => {
        return app.render(req, res, `/item`, {itemIndex: req.params.itemIndex});
    });

    server.get('/board/:id', (req, res) => {
        return app.render(req, res, '/board');
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, () => {
        console.log('running on 3000');
    })

});