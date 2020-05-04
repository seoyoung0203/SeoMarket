const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const userAPIRouter = require('./routes/user');
const boardAPIRouter = require('./routes/board');
const dbconfig = require('./config/database');


// 서버와 프론트의 주소가 다를경우에도 허락해주는 역할
app.use(cors({
   origin: true,
   credentials: true
}));

// form으로 넘어온 데이터를 처리하기 위해 필요한 코드
// req.body 받기 위함.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
   res.send('hello');
});

app.use('/api/user', userAPIRouter);
app.use('/api/board', boardAPIRouter);

app.listen(8084, () => {
   console.log('server is running on http://localhost:8084');
});