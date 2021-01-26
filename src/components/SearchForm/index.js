import React from "react";


function SearchForm(props) {
    return (
        <form>
            <div className="search-Form">
                <label htmlFor="search">Search for a Movie:</label>
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                placeholder="Enter a Movie"
                className="form-control"
                 />

                 <button onClick={props.handleSubmitForm}>Search</button>

            </div>
        </form>
    )
}

export default SearchForm;