const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig);

module.exports = router;

connection.connect();

router.get('/', (req, res) => {
    connection.query(`SELECT boardIndex, writer, subject FROM Board`, function (err, rows) {
        if(err) {
            res.status(403).send(err);
        } else {
            // console.log(rows);
            res.status(200).send(rows);
        }
    })
});

router.get('/:id', (req, res) => {
    const { boardIndex } = req.params;
    connection.query(`SELECT writer, subject, content FROM Board where=?`,[boardIndex] , function (err, rows) {
        if(err) {
            res.status(403).send(err);
        } else {
            // console.log(rows);
            res.status(200).send(rows);
        }
    })
});

router.post('/', (req, res) => {
    const {subject, writer, content} = req.body;

    connection.query(`INSERT INTO Board(subject, content, writer) VALUES(?,?,?);`, [subject, content, writer] , function (err, rows) {
        if(err) {
            console.log(err);
            res.status(403).send(err);
        } else {
            console.log(rows);
            res.status(200).send(rows);
        }
    })
});