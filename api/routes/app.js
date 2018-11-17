const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./../models/post');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://giftTheCode:txAbAzQju51QR05V@cluster0-lgses.mongodb.net/gtcHack?retryWrites=true")
.then(() => {
    console.log("Connected to database");
})
.catch(()=>{
    console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, PUT ,OPTIONS");
    next();
});

app.post('/api/posts', (req, res, next) => {
    // const post = req.body;
    const post = new Post({
        age: req.body.age,
        province: req.body.province,
        club: req.body.club.name,
        event : {
            location: req.body.event.location,
            type: req.body.event.type
        }
    });
    console.log(post);
    post.save();
    res.status(201).json({
        message:"Post Added success"
    });
})

app.get('/api/posts', (req, res, next) => {
   
    // Post.find()
    // .then(documents => {
    //     res.status(200).json({
    //         message: "Post successfull",
    //         post: documents
    //     });
    // });

    const posts = [
       {
            id: 'uwioeuw',
            age: '7',
            province: {
                id: '1',
                type :'ON'
            },
            club: {
                id: 'club1',
                name:'Central Tech TDSB - Service Location'
            },
            event: {
                location : 'toronto',
                type: 'Soccer2018'
            },
        },
        {
            id: 'mskadns',
            age: '12',
            province: {
                id: '2',
                type :'MB'
            },
            club: {
                id: 'club2',
                name:'T.P. Loblaw Site at St. Mary'
            },
            event: {
                location : 'toronto',
                type: 'Hockey2018'
            },
        }
    ];
    res.status(200).json({
        message: "Post successfull",
        post: posts[1]
    });
});

module.exports = app;