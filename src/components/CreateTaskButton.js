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
            <button 
                className="create-task-button bg-primary"
                onClick={ onClickButton }
            >    
                <i className="fas fa-plus"></i>
            </button>
        </Fragment>
    );
}

export {CreateTaskButton};