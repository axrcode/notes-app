import React, {Fragment} from 'react';

import { TaskContext } from './TaskContext';

import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm';
import { CreateTaskButton } from './CreateTaskButton';

import { Modal } from './Modal';

function AppUI() {

    const logo = 'https://axrcode.github.io/static/media/logo-axrcode.13e5db17.png';

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
            <div className="container pt-12 md:pt-8">
                
                <img 
                    src={logo} 
                    width="150" 
                    className="mx-auto"
                    alt="Logo AXRCODE"
                />

                <TaskCounter />

                <TaskSearch />

                <TaskList>
                    { error && <p>Hubo un error...</p> }
                    { loading && <p>Estamos cargando...</p> }
                    { (!loading && !searchedTasks.length) && <p>Crear primer tarea...</p> }
                
                    {
                        searchedTasks.map(task => (
                            <TaskItem 
                                key={task.text} 
                                text={task.text} 
                                completed={task.completed}
                                onComplete={() => completeTask(task.text)}
                                onDelete={() => deleteTask(task.text)}
                            />
                        ))
                    }
                </TaskList>

                { !!openModal && (
                    <Modal>
                        <TaskForm />
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