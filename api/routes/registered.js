'use strict';

const express = require('express');
const router = express.Router();

const emails = []

router.route('/')
  .get((req, res, next) => {
    // res.json({ data: books });
    res.send('hi')
  })
  .post((req, res) => {
    console.log(req)
    const { body } = req;
    const { email } = body;
    
    emails.push(email)

    console.log(emails)
  })

exports.router = router;
