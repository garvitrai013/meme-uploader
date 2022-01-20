import e from "express";

const Template = (props) => {
    const {name, tags, emotion, language, imgsrc, sticker, trend} = props;
    

    const handleDelete = () => {
        e.preventDefault();
        
    }

    return (
        <div className="template">
            <form className="form">
                <label htmlFor="name">Name</label><br/>
                <input type="text" id ="name" name="name" placeholder="Template name" value={name} required/><br/>
                <label htmlFor="tags">Tags (separated by commas)</label><br/>
                <input type="text" id ="tags" name="tags" placeholder="jethalal, taarak mehta, tv show, indian, hindi" value={tags} required/><br/>
                <label htmlFor="emotion">Emotion</label><br/>
                <select id="emotions" name="emotion" value={emotion} required>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Surprised">Surprised</option>
                    <option value="Confused">Confused</option>  
                    <option value="Angry">Angry</option>
                    <option value="Other">Other</option>
                </select><br/>
                <label htmlFor="language">Language</label><br/>
                <select id="language" name="language" value={language} required>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Other">Other</option>
                </select><br/>
                <img src={imgsrc} id="meme" alt="Meme Image"></img><br/>
                <label htmlFor="sticker">Is this a sticker?</label><br/>
                <select id="sticker" name="sticker" value={sticker}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br/>
                <label htmlFor="trending">Is it trending?</label><br/>
                <select id="trending" name="trending" value={trend}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br/>
                <p>Published</p>
                <button id="delete" ty onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default Template;