import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function Error(error){
    return (
        <div className="task-alert"><FontAwesomeIcon icon={faExclamationCircle}/><h2>Sorry, an error just occurred: {error?.error}</h2></div>
    );
}

export {Error};