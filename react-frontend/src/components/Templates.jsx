import Template from "./Template";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Templates = () => {
    const [templates, setTemplates] = useState({memes:[]});
    
    const getMemes = () => {
        axios.get('http://localhost:3001/all-memes')
        .then(res => {
            console.log(res.data);
            setTemplates({memes:res.data})
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => getMemes(), []);

    console.log(templates);
    const handleRefresh = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className="temp-container">
            <div className="temp-header">
                <h2 className="title">Templates</h2>
                <button onClick={handleRefresh} className="refresh">
                    <img src="refresh-icon.png" alt="Refresh"></img>
                </button>
                <select>
                    <option value="all">All</option>
                </select><br/>
            </div>
            <div className="templates">
                {templates.memes.map(meme => <Template key={meme._id} meme={meme} />)}
            </div>
        </div>
    )
}

export default Templates;