import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal bg-gray-900 bg-opacity-90 transition-all">
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };