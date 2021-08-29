import React, {Fragment} from 'react';

function TaskList( props ) {
    return(
        <Fragment>
            <section>
                <ul>
                    { props.children }
                </ul>
            </section>
        </Fragment>
    );
}

export {TaskList};