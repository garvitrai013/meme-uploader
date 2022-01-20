import Template from "./Template";
import React from "react";
import { useState, useEffect } from "react";

const Templates = () => {
    const [memes,setMemes] = useState(null); 
    useEffect(() => {   
        fetch("/all-meme")
        .then(res => res.json())
        .then(data => {  
            setMemes(data);
        });
    })
    console.log(memes);

    const handleRefresh = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return (
        <div className="temp-container">
            <div className="temp-header">
                <h2 className="title">Templates</h2>
                <a href="#" onClick={handleRefresh} className="refresh">
                    <img src="refresh-icon.png"></img>
                </a>
                <select>
                    <option value="all">All</option>
                </select><br/>
            </div>
            <div className="templates">
                {/*{memes.length() > 0? memes.map(meme => <Template key={meme.id} meme={meme}/>): <h2>No Templates</h2>}*/}
                <Template/>
                <Template/>
                <Template/>
                <Template/>
            </div>
        </div>
    )
}

export default Templates;