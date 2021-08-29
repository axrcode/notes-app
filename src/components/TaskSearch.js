import React, {Fragment} from 'react';

function TaskSearch() {
    return(
        <Fragment>
            <input 
                className="task-search"
                type="search" 
                placeholder="Hacer la cena" 
            />
        </Fragment>
    );
}

export {TaskSearch};