'use strict';

const express = require('express');
const router = express.Router();

const emails = []

router.route('http://localhost:3001/api/posts')
  .get((req, res, next) => {
    // res.json({ data: books });
    console.log(res);
    res.send(res);
    
  })
  .post((req, res) => {
    console.log(req)
    const { body } = req;
    const { email } = body;
    
    emails.push(email)

    console.log(emails)
  })

exports.router = router;
