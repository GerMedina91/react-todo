import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();
const TODOS = 'TODOS_V1';

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage(TODOS, []);
      const totalTodos = todos.length;
      const todosCompleted = todos.filter((todo) => todo.completed).length;
      
      
      const completeTodos = (id) => {
        const index = todos.findIndex(todo => (todo.id === id));
        const newTodos = [...todos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodos = (id) => {
        const index = todos.findIndex(todo => (todo.id === id));
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
      };
    
      const [searchvalue, setSearchValue] = React.useState('');
      const textTodo = searchvalue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      const CreateNewTask = (text) => {
          let newTodos = [...todos];
          const todo = {
            text: text,
            completed: false,
            id: 0,
          };

          if (newTodos.length === 0) {
            todo.id = 1;
            newTodos.push(todo);
            saveTodos(newTodos);
          } else {
            todo.id = newTodos[newTodos.length - 1].id + 1;
            newTodos.push(todo);
            saveTodos(newTodos);
          }
      };
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            todosCompleted,
            completeTodos,
            deleteTodos,
            searchvalue,
            setSearchValue,
            textTodo,
            todos,
            CreateNewTask,
        }}>
            {
                props.children
            }
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider };