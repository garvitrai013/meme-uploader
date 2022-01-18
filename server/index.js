const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req,res) => {
    res.json({
        name:"Kesi hai tu?",
        tags:"hera pheri, babu rao, bollywood, hindi",
        emotion:"Happy",
        language:"Hindi",
        imgsrc:"",
        sticker:"yes",
        trend:"yes"
    });
});

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});