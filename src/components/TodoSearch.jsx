import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './TodoSearch.scss'
import React from "react";

function TodoSearch() {
    return (
        <React.Fragment>
            <h2>Search task</h2>
            <div className="input-container">
                <FontAwesomeIcon className="icon" icon={faSearch}/>
                <input placeholder='Search'/>
            </div>
        </React.Fragment>
    );
}

export { TodoSearch };