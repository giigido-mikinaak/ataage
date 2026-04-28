import React from "react";

function Search({search, setSearch}) {
    function handleOnChange(e){
        setSearch(e.target.value)
    }
    return(
        <div className="search-container">
            <h3>Search for a Card</h3>
            <input type="text" 
            placeholder="Type to search..."
            // search state to user input
            value={search}
            // check for changes to input field
            onChange={handleOnChange}
            >

            </input>
        </div>
    )
}
export default Search