import React, {Fragment} from 'react';
import { TaskContext } from './TaskContext';

function TaskSearch() {

    const { searchValue, setSearchValue } = React.useContext(TaskContext);

    /**
     *  Función para obtener el contenido ingresado por el usuario en el input.
     *  Através de los props, conecta con el state del archivo App.js 
     */
    const onSearchValueChanged = (msg) => 
    {
        console.log('Buscando: ' + msg.target.value);
        setSearchValue(msg.target.value);
    }

    return (
        <Fragment>
            <input 
                className="form-control"
                type="search" 
                placeholder="Hacer la cena" 
                value={ searchValue }
                onChange={ onSearchValueChanged } 
            />
        </Fragment>
    );
}

export {TaskSearch};