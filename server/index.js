const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Meme = require('./meme');

const PORT = process.env.PORT || 3001;

const dbURI = 'mongodb://localhost:27017/memedb';
mongoose.connect(dbURI, { useNewUrlParser: true,useUnifiedTopology: true})
    .then((res) => app.listen (PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch((err) => console.log(err));

const app = express();

app.get('/add-meme',(req,res) => {
    const meme = new Meme({
        name:"Kesi hai tu?",
        tags:"hera pheri, babu rao, bollywood, hindi",
        emotion:"Happy",
        language:"Hindi",
        imgsrc:""
    });

    meme.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})

app.get("/api", (req,res) => {
    res.json({
        name:"Kesi hai tu?",
        tags:"hera pheri, babu rao, bollywood, hindi",
        emotion:"Happy",
        language:"Hindi",
        img:"",
        sticker:"Yes",
        trend:"No"
    });
});

