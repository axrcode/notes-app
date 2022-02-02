import React, {Fragment} from 'react';
import { TaskContext } from './TaskContext';

function CreateTaskButton(props) {

    const { openModal } = React.useContext(TaskContext);

    const onClickButton = () => 
    {
        props.setOpenModal( !openModal );
    };

    return(
        <Fragment>
            <div className="flex justify-center md:justify-end"> 
                <button 
                    className="create-task-button shadow-md bottom-20 md:bottom-10 bg-blue-600 px-5 py-2 text-white rounded-sm uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    onClick={ onClickButton }
                >    
                    <i className="fas fa-plus"></i>
                    <span className="ml-2">
                        Crear una nueva tarea
                    </span>
                </button>
            </div>
        </Fragment>
    );
}

export {CreateTaskButton};