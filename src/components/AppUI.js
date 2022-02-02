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

    const portafolio = 'https://axrcode.github.io/'
    const logo = portafolio + 'static/media/logo-axrcode.13e5db17.png'

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
            <div className="container py-15 md:py-20">
                
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
            <footer className="bg-gray-800 flex items-center justify-center py-5">
                <h2>
                    {'< '} 
                    Desarrollado por {''} 
                    <a  href={portafolio} target="_blank" rel="noreferrer"
                        className="font-bold">
                        Axel Castillo
                    </a>
                    {' />'}
                </h2>
            </footer>
        </Fragment>
    );
}

export { AppUI };