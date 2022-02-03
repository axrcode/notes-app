import React from 'react';
import { TaskContext } from './TaskContext';

function TaskSearch() {

    const { searchValue, setSearchValue } = React.useContext(TaskContext);

    /**
     *  Función para obtener el contenido ingresado por el usuario en el input.
     *  Através de los props, conecta con el state del archivo App.js 
     */
    const onSearchValueChanged = (msg) => 
    {
        setSearchValue(msg.target.value);
    }

    return (
        <div className="md:flex justify-center">
            <div className="md:w-1/2 lg:w-2/5">
                <input 
                    className="bg-gray-800 w-full p-2 px-4 mt-2 placeholder-gray-500 text-xl rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-800" 
                    type="search" 
                    placeholder="Buscar una tarea..." 
                    value={ searchValue }
                    onChange={ onSearchValueChanged } 
                />
            </div>
        </div>
    );
}

export {TaskSearch};