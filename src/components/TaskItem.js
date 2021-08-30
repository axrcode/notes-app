import React, {Fragment} from 'react';

function TaskItem( props ) {

    const onComplete = () => 
    {
        alert('Completado: ' + props.text);
    }

    const onDelete = () => 
    {
        alert('Eliminado: ' + props.text);
    }

    return(
        <Fragment>
            <li className="task-item">
                <span 
                    className={`icon icon-check ${props.completed && 'icon-check-active'}`}
                    onClick={onComplete}
                >
                    {
                        props.completed 
                        ? <i className="fas fa-check-circle"></i>
                        : <i className="fas fa-check"></i>
                    }
                </span>

                <p className={`${props.completed && 'task-item-completed'}`}>
                    { props.text }
                </p>

                <span 
                    className="icon icon-delete"
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </span>
            </li>
        </Fragment>
    );
}

export {TaskItem};