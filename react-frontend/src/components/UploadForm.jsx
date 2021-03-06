import React from "react";
import axios from "axios";
import { useState } from "react";

const UploadForm = () => {
    const [name, setName] = useState("");
    const [tags, setTags] = useState("");
    const [emotion, setEmotion] = useState("");
    const [language, setLanguage] = useState("");
    const [img, setImg] = useState("");
    const [imgName, setImgName] = useState("");

    const onImgChange = (e) => {
        setImg(e.target.files[0]);
        setImgName(e.target.files[0].name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("handleSubmit");

        const formData = new FormData();
        formData.append('name', name);
        formData.append('tags', tags);
        formData.append('emotion', emotion);
        formData.append('language', language);
        formData.append('img', img);
        formData.append('imgName', imgName);
        formData.append('sticker', "Yes");
        formData.append('trend', "No");
        
        axios({
            method: "POST",
            url: "http://localhost:3001/add-meme",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data);
            });

        setName("");
        setTags("");
        setEmotion("select");
        setLanguage("select");
        setImg("");
        setImgName("");
    };

    return (
        <div className="upload-form">
            <h2 className="title">Upload Template</h2>
            <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Template name" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
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
                <input type="file" id="img" name="img" accept=".jpg,.jpeg,.png,.gif" onChange={(e)=> onImgChange(e)} required/><br/>
                <button type="submit" id="submit" >Upload</button>
            </form>
            <p style={{textAlign: "center"}}>Hit refresh to see your uploaded meme below</p>
        </div>
    )
}

export default UploadForm;