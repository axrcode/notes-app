import React from 'react'
import { TaskContext } from './TaskContext'

const FirstTask = (props) => {

    const { openModal } = React.useContext(TaskContext);

    const onClickButton = () => 
    {
        props.setOpenModal( !openModal );
    };

    return (
        <div className="flex justify-center">
            <button 
                className="bg-gray-800 mt-5 rounded-sm py-10 px-10 md:px-40 shadow-sm text-5xl hover:shadow-lg hover:bg-gray-700 border-double border-4 border-blue-600 border-opacity-25"
                onClick={ onClickButton }
            >
                <i class="fas fa-thumbs-up"></i> <br/>
                <span className="text-lg md:text-xl uppercase">
                    Crear mi primera tarea
                </span>
            </button>
        </div>
    )
}

export default FirstTask
