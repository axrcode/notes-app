import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider(props) {

    /**
     *  Declaración de los state para: 
     *  - Obtener las tareas (tasks)
     *  - Valor de busqueda (searchValue)
     */
    const { 
        items: tasks, 
        saveChangeItem: saveChangeTasks, 
        loading,
        error
    } =  useLocalStorage( 'Task_v1', [] );
    const [ searchValue, setSearchValue ] = React.useState( '' );

    const [ openModal, setOpenModal ] = React.useState(false);

    /**
     *  Variables para procesos utilizando el state: 
     *  - Filtrar tasks completados
     *  - Total de task almacenados
     */
    const completedTask = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;

    /**
     *  Array vacio para ir filtrando los tasks que coincidan con la búsqueda.
     *  Condición para saber si la valor de búsqueda esta vació o contiene datos
     */
    let searchedTasks = [];

    if ( !searchValue.length > 0 ) {
        /**
         *  Devuelve todas las tareas
         */
        searchedTasks = tasks;
    } else { 
        /**
         *  Convierte el text de los tasks y el contenido del state de búsqueda en minúscula,
         *  para forzar la coincidencia de los datos.
         *  Verificar si el text del task contiene en algo del valor de búsqueda (return)
         */
        searchedTasks = tasks.filter(task => {
        const taskText = task.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return taskText.includes(searchText);
        });
    } 

    /**
     *  Operaciones para marcar como completada una tarea o eliminarla
     *  - La función saveChangeTasks() se obtiene del Custom Hook 'useLocalStorage()'
     */
    const addTask = (text) => {
        const newTasks = [...tasks];
        //  Crear una nueva tarea
        newTasks.push({
            completed: false,
            text,
        });
        saveChangeTasks(newTasks);
    }

    const completeTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTasks = [...tasks];
        //  Cambiar el valor de la propiedad completed de la tarea
        newTasks[taskIndex].completed = true;
        saveChangeTasks(newTasks);
    }

    const deleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTasks = [...tasks];
        //  Eliminar el elemento seleccionado
        newTasks.splice(taskIndex, 1);
        saveChangeTasks(newTasks);
    }

    return (
        <TaskContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTask,
            searchValue,
            setSearchValue,
            searchedTasks,
            addTask,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
            tasks
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };