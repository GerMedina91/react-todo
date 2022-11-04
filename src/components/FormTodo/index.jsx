import React from "react";
import './FormTodo.scss';
import { TodoContext } from "../../contexts/TodoContext";
import { ModalContext } from "../UI/Modal/Modal.context";

function FormTodo(){
    const [textValue, setTextValue] = React.useState('');

    const {
        CreateNewTask,
    } = React.useContext(TodoContext);

    const { setVisible } = React.useContext(ModalContext);


    const closeForm = () => {
        setTextValue('');
        setVisible(false);
    }

    const addTask = (event) => {
        event.preventDefault();
        CreateNewTask(textValue);
        setTextValue('');
        setVisible(false);
    }

    return (
        <section className="form-modal h-100 d-flex flex-column">
            <h1>New Task</h1>
            <form onSubmit={addTask} className="d-flex flex-column justify-content-between h-100">
                <div>
                    <label htmlFor="text-task" className="form-label">Your task</label>
                    <div className="input-group">
                        <input type="text" onChange={(event) => (setTextValue(event.target.value))} value={textValue} className="form-control" id="text-task"/>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <button className="primary" type="submit">Add Task</button>
                    <button  type="button" onClick={closeForm} >Cancel</button>
                </div>
            </form>
        </section>         
    );
}

export {FormTodo}