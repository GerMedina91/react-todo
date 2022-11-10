import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';

function NewTask(){
    return (
        <div className="task-alert"><FontAwesomeIcon icon={faFile}/><h2>Create a new task...</h2></div>
    );
}

export { NewTask };