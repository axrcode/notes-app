import React, {Fragment} from 'react';

function TaskCounter( props ) {
    return(
        <Fragment>
            <h2 className="task-counter text-center mx-5 px-5 mb-5">
                Has completado { props.completed } de { props.total } tareas
            </h2>
        </Fragment>
    );
}

export {TaskCounter};