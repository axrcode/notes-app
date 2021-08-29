import React, {Fragment} from 'react';

function CreateTaskButton() {
    return(
        <Fragment>
            <button className="create-task-button">
                <i className="fas fa-plus"></i>
            </button>
        </Fragment>
    );
}

export {CreateTaskButton};