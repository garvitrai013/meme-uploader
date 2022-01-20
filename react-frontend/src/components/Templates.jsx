import Template from "./Template";
import React from "react";
import { useState, useEffect } from "react";

const Templates = (props) => {
    const [memes,setMemes] = useState(null); 
    useEffect(() => {   
        fetch("/all-meme")
        .then(res => res.json())
        .then(data => {  
            setMemes(data);
        });
    })
    console.log(memes);

    const handleSelectionChange = (e) => {

    }

    const handleRefresh = (e) => {
        e.preventDefault();


    }

    return (
        <div className="temp-container">
            <div className="temp-header">
                <h2 className="title">Templates</h2>
                <a href="#" onClick={handleRefresh} className="refresh">
                    <img src="refresh-icon.png"></img>
                </a>
                <select onChange={handleSelectionChange}>
                    <option value="all">All</option>
                    <option value="trend">Trending</option>
                    <option value="stickers">Stickers</option>
                </select><br/>
            </div>
            <div className="templates">
                <Template/>
            </div>
        </div>
    )
}

export default Templates;