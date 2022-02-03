import React, {Fragment} from 'react';

import { TaskContext } from './TaskContext';

import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm';
import { CreateTaskButton } from './CreateTaskButton';

import { Modal } from './Modal';
import Footer from './Footer';
import FirstTask from './FirstTask';
import Loading from './Loading';
import TaskNotFound from './TaskNotFound';

function AppUI() {

    const portafolio = 'https://axrcode.vercel.app/'
    const logo = portafolio + 'static/media/logo-axrcode.13e5db17.png'

    const {
        error,
        loading,
        searchedTasks,
        completeTask,
        deleteTask, 
        openModal,
        setOpenModal,  
        tasks,              
    } = React.useContext(TaskContext);

    return (
        <Fragment>
            <div className="container pt-10 pb-48 md:pt-20 md:pb-36 px-5">
                
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
                    { loading && 
                        <>
                            <Loading />  
                            <Loading />
                        </> 
                    }
                    { (!loading && !searchedTasks.length && !tasks.length) && 
                        <FirstTask setOpenModal={setOpenModal} />
                    }
                
                    {
                        (!loading && searchedTasks.length > 0) &&
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

                    { 
                        (!loading && !searchedTasks.length && tasks.length>0) &&
                            <TaskNotFound />
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
            
            <Footer 
                portafolio={portafolio}
            />

        </Fragment>
    );
}

export { AppUI };