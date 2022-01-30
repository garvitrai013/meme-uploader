const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Meme = require('./meme');
var cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

const dbURI = 'mongodb://localhost:27017/memedb';
mongoose.connect(dbURI, { useNewUrlParser: true,useUnifiedTopology: true})
    .then((res) => app.listen (PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch((err) => console.log(err));

app.use(cors())
app.use(express.urlencoded({ extended: true }));

var mstorage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, "./react-frontend/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

const upload = multer({ storage: mstorage });

app.post('/add-meme', upload.single("img"), (req,res) => {
    console.log(req);
    const meme = new Meme({
        name: req.body.name,
        tags: req.body.tags,
        emotion: req.body.emotion,
        language: req.body.language,
        imgName: req.file.filename,
        sticker: req.body.sticker,
        trend: req.body.trend
    });
    console.log(meme);
    meme.save()
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
})


app.get('/all-memes',(req,res) => {
    Meme.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})

app.delete('/delete-meme', (req, res) => {
    Meme.deleteOne({ _id: req.body.id })
        .then(() => console.log('deleted'))
        .catch((err) => console.log(err));
})

app.get('/',(req,res) => {
    res.send("Welcome to server!");
})