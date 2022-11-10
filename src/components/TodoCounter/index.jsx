import React from "react";

function TodoCounter({
    totalTodos,
    todosCompleted
}){

    return (
        <h1>completed {todosCompleted} of {totalTodos}</h1>
    );
};

export { TodoCounter };