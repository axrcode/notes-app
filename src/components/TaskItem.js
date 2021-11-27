import React, {Fragment} from 'react';

function TaskItem( props ) {

    return(
        <Fragment>
            <li className="task-item">
                <span 
                    className={`icon icon-check ${props.completed && 'icon-check-active'}`}
                    onClick={props.onComplete}
                >
                    <i className="fas fa-check-circle"></i>
                </span>

                <p className={`${props.completed && 'task-item-completed'}`}>
                    { props.text }
                </p>

                <span 
                    className="icon icon-delete"
                    onClick={props.onDelete}
                >
                    <i className="fas fa-trash"></i>
                </span>
            </li>
        </Fragment>
    );
}

export {TaskItem};