import React, {Fragment} from 'react';

function CreateTaskButton() {

    const onClickButton = (msg) => 
    {
        alert(msg);
    };

    return(
        <Fragment>
            <button 
                className="create-task-button bg-primary"
                onClick={ () => onClickButton('Abrir Modal') }
            >    
                <i className="fas fa-plus"></i>
            </button>
        </Fragment>
    );
}

export {CreateTaskButton};