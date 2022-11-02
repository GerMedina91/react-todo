import React from "react";
import './TodoList.scss';

function TodoList(props){
    return (
        <React.Fragment>
            <h2>To do</h2>
            <ul>
                {props.children}
            </ul>
        </React.Fragment>
    );
}

export { TodoList };