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
    const searchTodos = todos
    .filter(todo => (
        todo.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(textTodo)
    ));

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
                        
                        (loading === false && searchTodos.length === 0 && searchvalue !== '' && todos.length > 0) ? onEmptySearch() : null
                    }
                    {
                        error.isError && onError(error.error)
                    }
                    {
                        searchTodos
                        .map(render)
                    }
            </ul>
        </React.Fragment>
    );
}

export { TodoList };