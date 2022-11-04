import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import React from "react";

function TodoItem({text, completed,onComplete,onDelete}){

    return (
        <li className={"d-flex justify-content-between align-items-center container " + (completed ? "completed" : "")}>
            <div className="d-flex">
                <FontAwesomeIcon icon={faCheck}
                    onClick={onComplete}
                 />
                <p>{text}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faClose}
                    onClick={onDelete}    
                />
            </div>
        </li>
    );
}

export { TodoItem };