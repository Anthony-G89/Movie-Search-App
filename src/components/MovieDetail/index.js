/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css"



function movieDetail (props) {
    return (
        <div className="text-center">
            <img src={props.src} alt={props.title}/>
            <h3>Directors: {props.director}</h3>
            <p>Genre:{props.genre}</p>
            <p>Released:{props.released}</p>
            

        </div>
    )
}

export default movieDetail;