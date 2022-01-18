import Template from "./Template";

const Templates = (props) => {
    console.log("templates" + props);

    const handleSelectionChange = (e) => {

    }

    return (
        <div className="temp-container">
        <h2 className="title">Templates</h2>
        <button>refresh</button>
        <select onChange={handleSelectionChange}>
            <option value="all">All</option>
            <option value="happy">Trending</option>
            <option value="sad">Stickers</option>
        </select><br/>
        <div className="templates">
            <Template props/>
            <Template />
            <Template />
        </div>
        </div>
    )
}

export default Templates;