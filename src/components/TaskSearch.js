import React, {Fragment} from 'react';

function TaskSearch() {

    const onSearchValueChanged = (msg) => 
    {
        console.log('Buscando: ' + msg.target.value);
    }

    return(
        <Fragment>
            <input 
                className="task-search"
                type="search" 
                placeholder="Hacer la cena" 
                onChange={onSearchValueChanged} 
            />
        </Fragment>
    );
}

export {TaskSearch};