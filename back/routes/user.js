const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig);

module.exports = router;



router.post('/', async (req, res) => {
    const userPassword = req.body.password;
    // console.log(userPassword);
    connection.query(`SELECT * FROM User where userId = ?`, [req.body.userId],function (err, rows, field) {
        if(err) {
            res.status(403).send(err);
        } else {
            if(rows[0].password == userPassword) {
                return res.status(200).send(rows);
            }
        }
    });
});

router.post('/', (req, res) => {
   try {
       console.log('회원가입');
   } catch (e) {

   }
});

router.post('/logout', (req, res) => {
    return res.send('logOut 성공');
});