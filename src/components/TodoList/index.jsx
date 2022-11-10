import React from "react";
import './TodoList.scss';

function TodoList({
    loading,
    totalTodos,
    error,
    todos,
    textTodo,
    searchvalue,
    onLoading,
    onEmpty,
    onError,
    onEmptySearch,
    render
}){

    return (
        <React.Fragment>
            <h2>To do</h2>
            <ul>
                    {
                        loading && onLoading()
                    }
                    {
                        (!loading && !totalTodos) && onEmpty()
                    }
                    {
                        ((!loading && totalTodos) && textTodo) && onEmptySearch()
                    }
                    {
                        error.isError && onError(error.error)
                    }
                    {
                        todos
                        .filter(todo => (
                            todo.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(textTodo)
                        ))
                        .map(render)
                    }
            </ul>
        </React.Fragment>
    );
}

export { TodoList };