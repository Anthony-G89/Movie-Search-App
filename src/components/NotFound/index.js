import React from "react";
import "./style.css";


function noResults (props) {

    return(
        <div className="noDisplay">
            {props.children}
        </div>
    )

}

export default noResults;