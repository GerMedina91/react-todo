import React from "react";
import './TodoList.scss';

function TodoList({children}){

    return (
        <React.Fragment>
            <h2>To do</h2>
            <ul>
                {children}
            </ul>
        </React.Fragment>
    );
}

export { TodoList };