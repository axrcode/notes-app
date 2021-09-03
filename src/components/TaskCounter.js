import React, {Fragment} from 'react';

function TaskCounter( props ) {
    return(
        <Fragment>
            <h2 className="task-counter">
                Has completado { props.completed } de { props.total } tareas
            </h2>
        </Fragment>
    );
}

export {TaskCounter};