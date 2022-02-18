import React from "react";
import axios from "axios";

const Template = (props) => {
    console.log("template.jsx");
    console.log(props);
    
    const handleChange = (e) => {

    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios({
            method: "delete",
            url: "http://localhost:3001/delete-meme",
            data: {id: props.meme._id},
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

        window.location.reload();
    }

    return (
        <div className="template">
            <form className="form">
                <label htmlFor="name">Name</label><br/>
                <input type="text" id ="name" name="name" placeholder="Template name" value={props.meme.name} required/><br/>
                <label htmlFor="tags">Tags (separated by commas)</label><br/>
                <input type="text" id ="tags" name="tags" placeholder="jethalal, taarak mehta, tv show, indian, hindi" value={props.meme.tags} required/><br/>
                <label htmlFor="emotion">Emotion</label><br/>
                <select id="emotions" name="emotion" value={props.meme.emotion} required>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Surprised">Surprised</option>
                    <option value="Confused">Confused</option>  
                    <option value="Angry">Angry</option>
                    <option value="Other">Other</option>
                </select><br/>
                <label htmlFor="language">Language</label><br/>
                <select id="language" name="language" value={props.meme.language} required>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Other">Other</option>
                </select><br/>
                <div className="meme-container">
                    <img src={'/uploads/'+props.meme.imgName} id="meme" alt="Meme"></img><br/>
                </div>
                <label htmlFor="sticker">Is this a sticker?</label><br/>
                <select id="sticker" name="sticker" value={props.meme.sticker}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br/>
                <label htmlFor="trending">Is it trending?</label><br/>
                <select id="trending" name="trending" value={props.meme.trend}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br/>
                <p>Published</p>
                <button id="delete" type="delete" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default Template;