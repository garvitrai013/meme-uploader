const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Meme = require('./meme');

const PORT = process.env.PORT || 3001;

const dbURI = 'mongodb://localhost:27017/memedb';
mongoose.connect(dbURI, { useNewUrlParser: true,useUnifiedTopology: true})
    .then((res) => app.listen (PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch((err) => console.log(err));

const app = express();
app.use(express.urlencoded({ extended: true }));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file');

app.post('/add-meme',(req,res) => {
    const meme = new Meme(req.body);
    console.log(meme);
    meme.save()
        .then((result) => res.redirect('/'))
        .catch((err) => console.log(err));
})


app.get('/all-memes',(req,res) => {
    Meme.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})