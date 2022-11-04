import ReactDOM from 'react-dom';
import React from 'react';
import './Modal.scss';
import { ModalContext } from './Modal.context';

function Modal({ children }){

    const { visible } = React.useContext(ModalContext)
    
    return ReactDOM.createPortal(
        <div className={'modal ' + (visible ? 'open' : '')}>
            { children } 
        </div>
        ,
        document.getElementById('modal')
    );
}

export { Modal };