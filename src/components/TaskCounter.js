import React, {Fragment} from 'react';
import { TaskContext } from './TaskContext';

function TaskCounter() {

    const { totalTasks, completedTask } = React.useContext(TaskContext);

    return(
        <Fragment>
            <h2 className="task-counter text-center">
                Has completado { completedTask } de { totalTasks } tareas
            </h2>
        </Fragment>
    );
}

export {TaskCounter};