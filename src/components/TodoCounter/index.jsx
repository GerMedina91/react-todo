import React from "react";
import { TodoContext } from '../../contexts/TodoContext';

function TodoCounter(){

    const {
        totalTodos,
        todosCompleted
    } = React.useContext(TodoContext);

    return (
        <h1>completed {todosCompleted} of {totalTodos}</h1>
    );
};

export { TodoCounter };