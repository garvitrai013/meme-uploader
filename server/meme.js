const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    tags: {
        type:String,
        required:true
    },
    emotion: {
        type:String,
        required:true
    },
    language: {
        type:String,
        required:true
    },
    imgName: {
        type:String,
        required:true
    },
    sticker: {
        type:String
    },
    trend: {
        type:String
    }
})

module.exports = new mongoose.model('Meme', memeSchema);