
import React from 'react';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import { useTodo } from "./useTodo";
import { Modal } from '../components/UI/Modal';
import { FormTodo } from '../components/FormTodo';
import './App.scss';
import { ReactComponent as LoadingSVG } from '../assets/images/loading.svg'
import { useModal } from "../components/UI/Modal/useModal";
import { NewTask } from '../components/UI/NewTask';
import { Error } from '../components/UI/Error';
import { SearchResult } from '../components/UI/SearchResult';


function App() {
  const {
    todos,
    textTodo,
    completeTodos,
    deleteTodos,
    loading,
    totalTodos,
    error,
    todosCompleted,
    searchvalue,
    setSearchValue,
    CreateNewTask
  } = useTodo();


  const { 
    visible, setVisible 
  } = useModal();



return(
    <React.Fragment>
        <header>
            <nav className='container d-flex justify-content-between'>
            <div className='img-conteiner'>
                <img alt='German Medina' src={require('../assets/images/team-lupikenn-ger.jpg')} />
            </div>
            <CreateTodoButton setVisible={setVisible}/>
            </nav>
        </header>
        <main>
            <section id='title'>
            <div className='container'>
                <h2>Hi, <span>Germán!</span></h2>
                <h1>Your <span>tasks</span></h1>
                <TodoCounter 
                totalTodos={totalTodos}
                todosCompleted={todosCompleted}/>
            </div>
            <div className="custom-shape-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            </section>
            <section id='list'>
            <div className='container'>
                <TodoSearch 
                    searchvalue={searchvalue}
                    setSearchValue={setSearchValue}
                />
                <TodoList
                  loading={loading}
                  totalTodos={totalTodos}
                  error={error}
                  todos={todos}
                  textTodo={textTodo}
                  searchvalue={searchvalue}
                  onLoading={() => <LoadingSVG />}
                  onEmpty={() => <NewTask />}
                  onError={() => <Error />}
                  onEmptySearch={() => <SearchResult text={searchvalue} />}
                  render={todo => (
                        <TodoItem 
                            key={todo.id} 
                            text={todo.text} 
                            completed={todo.completed}
                            onComplete={() => completeTodos(todo.id)}
                            onDelete={() => deleteTodos(todo.id)}
                        />
                    )}
                />                
            </div>
            </section>

            <Modal visible={visible}>
                <FormTodo 
                    setVisible={setVisible}
                    CreateNewTask={CreateNewTask}
                />           
            </Modal>
        </main>
    </React.Fragment>
);
}

export default App;
