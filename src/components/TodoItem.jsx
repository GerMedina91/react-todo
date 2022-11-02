import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import React from "react";

function TodoItem(props){
    return (
        <li className={"d-flex justify-content-between align-items-center container " + (props.completed ? "completed" : "")}>
            <div className="d-flex">
                <FontAwesomeIcon icon={faCheck} />
                <p>{props.text}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faClose} />
            </div>
        </li>
    );
}

export { TodoItem };