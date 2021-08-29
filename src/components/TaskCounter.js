import React, {Fragment} from 'react';

function TaskCounter() {
    return(
        <Fragment>
            <h2 className="task-counter">
                Has completado 2 de 3 tareas
            </h2>
        </Fragment>
    );
}

export {TaskCounter};