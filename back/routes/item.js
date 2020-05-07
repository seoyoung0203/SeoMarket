const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig);

module.exports = router;

connection.connect();

router.get('/', (req, res) => {
    connection.query(`SELECT * FROM Item`, function (err, rows) {
        if(err) {
            res.status(403).send(err);
        } else {
            console.log(rows);
            res.status(200).send(rows);
        }
    })
});

router.get('/:id', (req, res) => {
    const { itemIndex } = req.params;
    try {
        connection.query(`SELECT * FROM Item WHERE itemIndex=?`,[itemIndex] , function (err, rows) {
            console.log(rows);
            res.status(200).send(rows);
        })
    } catch (e) {
        console.error(e);
        res.status(403).send(e);
    }
});

router.post('/', (req, res) => {

});