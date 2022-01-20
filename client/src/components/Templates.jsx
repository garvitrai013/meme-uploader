import Template from "./Template";

const Templates = (props) => {

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
                    <option value="happy">Trending</option>
                    <option value="sad">Stickers</option>
                </select><br/>
            </div>
            <div className="templates">
                <Template {...props}/>
                <Template />
                <Template />
            </div>
        </div>
    )
}

export default Templates;