import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './CreateTodoButton.scss'
import React from "react";

function CreateTodoButton({ setVisible }){
    
    const TodoCreate = () => {
        setVisible(true);
    };
    
    return (
        <button
            onClick={TodoCreate}
        >
        <FontAwesomeIcon icon={faPlus} /></button>
    );
}

export { CreateTodoButton };