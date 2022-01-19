const express = require('express');

const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
let url = "mongodb://localhost:27017/memedb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("memedb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  
  dbo.createCollection("memes2", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

  dbo.collection("memes2").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

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