import React, {Fragment} from 'react';

import { TaskContext } from './TaskContext';

import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';

function AppUI() {
    return (
        <Fragment>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mx-md-auto text-white mt-5">
                        <TaskCounter />

                        <TaskSearch />

                        <TaskContext.Consumer>
                            { ({
                                error,
                                loading,
                                searchedTasks,
                                completeTask,
                                deleteTask,                 
                            }) => (
                                <TaskList>
                                    { error && <p>Hubo un error...</p> }
                                    { loading && <p>Estamos cargando...</p> }
                                    { (!loading && !searchedTasks.length) && <p>Crear primer tarea...</p> }
                        
                                    {
                                    searchedTasks.map(task => (
                                        <TaskItem 
                                        key={task.id} 
                                        text={task.text} 
                                        completed={task.completed}
                                        onComplete={() => completeTask(task.id)}
                                        onDelete={() => deleteTask(task.id)}
                                        />
                                    ))
                                    }
                                </TaskList>
                            ) }
                        </TaskContext.Consumer>

                        <CreateTaskButton />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export { AppUI };