import React, {Fragment} from 'react';

function TaskItem( props ) {
    return(
        <Fragment>
            <li>
                <span>C</span>
                <p>{ props.text }</p>
                <span>X</span>
            </li>
        </Fragment>
    );
}

export {TaskItem};