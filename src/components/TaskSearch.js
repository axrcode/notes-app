import React, {Fragment} from 'react';

function TaskSearch() {

    const [ searchValue, setSearchValue ] = React.useState('');

    const onSearchValueChanged = (msg) => 
    {
        console.log('Buscando: ' + msg.target.value);
        setSearchValue(msg.target.value);
    }

    return(
        <Fragment>
            <input 
                className="task-search"
                type="search" 
                placeholder="Hacer la cena" 
                value={ searchValue }
                onChange={ onSearchValueChanged } 
            />
            <p>{ searchValue }</p>
        </Fragment>
    );
}

export {TaskSearch};