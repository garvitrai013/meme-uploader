import React from "react";
import { useState } from "react";

const UploadForm = () => {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        
        
    };

    return (
        <div className="upload-form">
            <h2 className="title">Upload Template</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Template name" required/><br/>
                <label htmlFor="tags">Tags (separated by commas)</label>
                <input type="text" id="tags" name="tags" placeholder="jethalal, taarak mehta, tv show, indian, hindi" required/><br/>
                <label htmlFor="emotion">Emotion</label>
                <select id="emotion" name="emotion" required><br/>
                    <option value="" disabled selected hidden>Select One</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Surprised">Surprised</option>
                    <option value="Confused">Confused</option>  
                    <option value="Angry">Angry</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="language">Language</label>
                <select id="languages" name="language" required><br/>
                    <option value="" disabled selected hidden>Select One</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Other">Other</option>
                </select>
                <input type="file" id="meme" name="meme" accept=".jpg,.jpeg,.png,.gif" required/><br/>
                <button type="submit" id="submit">Upload</button>
            </form>
        </div>
    )
}

export default UploadForm;