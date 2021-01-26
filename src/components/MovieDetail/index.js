/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css"



function movieDetail (props) {
    return (
        <div className="text-center mt-4">
            <img  src={props.src} alt={props.title}/>
            <h1><span className="movieInfo">Title:</span> {props.title}</h1>
            <p> <span  className="movieInfo">Actors:</span> {props.actors}</p>
            <p><span  className="movieInfo">Directors:</span> {props.director}</p>
            <p><span  className="movieInfo">Plot:</span> {props.plot}</p>
            <p><span  className="movieInfo">Rated:</span> {props.rated}</p>
            <p><span  className="movieInfo">Genre:</span> {props.genre}</p>
            <p><span  className="movieInfo">Released:</span> {props.released}</p>
            

        </div>
    )
}

export default movieDetail;