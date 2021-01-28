import React from "react";
import "./style.css"

function header(props) {
    return (
        <div className="jumbotron jumbotron-fluid logo-header">
            <h1 className="title">{props.children}</h1>
        </div>
    )

};

export default header ;