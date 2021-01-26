import React from "react";
import "./style.css";


function SearchForm(props) {
    return (
        <form>
            <div className="search-Form text-center">
                <label className="movieSearchLabel" htmlFor="search">Search for a Movie:</label>
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                placeholder="Enter a Movie"
                className="form-control"
                 />

                 <button className="movieBtn" onClick={props.handleSubmitForm}>Search</button>

            </div>
        </form>
    )
}

export default SearchForm;