import React, {Fragment} from 'react';

import { TaskContext } from './TaskContext';

import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';

import { Modal } from './Modal';

function AppUI() {

    const {
        error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask, 
        openModal,
        setOpenModal,                
    } = React.useContext(TaskContext);

    return (
        <Fragment>
            <div className="container">
                <TaskCounter />

                <TaskSearch />

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

                { !!openModal && (
                    <Modal>
                        <p>JDASHDKASJDHASKLJH</p>
                    </Modal>
                ) }

                <CreateTaskButton 
                    setOpenModal={setOpenModal}
                />
            </div>
        </Fragment>
    );
}

export { AppUI };