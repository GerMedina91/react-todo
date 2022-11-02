import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './CreateTodoButton.scss'
import React from "react";

function CreateTodoButton(){
    return (
        <button><FontAwesomeIcon icon={faPlus} /></button>
    );
}

export { CreateTodoButton };