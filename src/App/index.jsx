
import React from 'react';
import { TodoProvider } from '../contexts/TodoContext';
import { AppUI } from './AppUI';
import { ModalProvider } from '../components/UI/Modal/Modal.context';



function App() {
  return (
    <TodoProvider>
      <ModalProvider>
        <AppUI/>
      </ModalProvider>
    </TodoProvider>
  );
}

export default App;
