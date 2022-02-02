import React, {Fragment} from 'react';
import { TaskContext } from './TaskContext';

function TaskCounter() {

    const { totalTasks, completedTask } = React.useContext(TaskContext);


    return(
        <Fragment>
            <h2 className="text-3xl text-center my-5 font-bold uppercase">
                Has completado { completedTask } de { totalTasks } tareas
            </h2>
        </Fragment>
    );
}

export {TaskCounter};