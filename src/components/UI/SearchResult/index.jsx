import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchResult({text}){
    return (
        <div className="task-alert"><FontAwesomeIcon icon={faMagnifyingGlass}/><h2>Sorry, no result for {text}</h2></div>
    );
}

export {SearchResult};
