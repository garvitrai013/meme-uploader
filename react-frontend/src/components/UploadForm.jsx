import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const UploadForm = () => {
    const [name, setName] = useState("");
    const [tags, setTags] = useState("");
    const [emotion, setEmotion] = useState("");
    const [language, setLanguage] = useState("");
    const [imgsrc, setImgsrc] = useState("");
    const [sticker, setSticker] = useState("");
    const [trend, setTrend] = useState("");

    const [meme, setMeme] = useState(null);
        useEffect(() => {
            fetch("/add-meme")
            .then((res) => res.json())
            .then((meme) => setMeme(meme));
        },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTrend("no");
        setSticker("yes");
        console.log("handleSubmit");
        const data = new FormData()
        data.append('file', imgsrc);
        data.append('name', name);
        data.append('tags', tags);
        data.append('emotion', emotion);
        data.append('language', language);
        data.append('sticker', sticker);
        data.append('trend', trend);
        axios.post("https://localhost:3001/add-meme", data)
        .then(res => console.log(res.data));
    };

    return (
        <div className="upload-form">
            <h2 className="title">Upload Template</h2>
            <form className="form" action="/add-meme" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Template name" value={name} onChange={(e) => setName(e.target.value)} value={name} required/><br/>
                <label htmlFor="tags">Tags (separated by commas)</label>
                <input type="text" id="tags" name="tags" placeholder="jethalal, taarak mehta, tv show, indian, hindi" value={tags} onChange={(e) => setTags(e.target.value)} required/><br/>
                <label htmlFor="emotion">Emotion</label>
                <select id="emotion" name="emotion" defaultValue="select"  onChange={(e) => setEmotion(e.target.value)} required>
                    <option value="select" disabled hidden>Select One</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Surprised">Surprised</option>
                    <option value="Confused">Confused</option>  
                    <option value="Angry">Angry</option>
                    <option value="Other">Other</option>
                </select><br/>
                <label htmlFor="language">Language</label>
                <select id="languages" name="language" defaultValue="select"  onChange={(e) => setLanguage(e.target.value)} required>
                    <option value="select" disabled hidden>Select One</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Other">Other</option>
                </select><br/>
                <input type="file" id="meme" name="meme" accept=".jpg,.jpeg,.png,.gif" onChange={(e)=> {setImgsrc(e.target.files[0])}} required/><br/>
                <button type="submit" id="submit">Upload</button>
            </form>
        </div>
    )
}

export default UploadForm;