import React, {Fragment} from 'react';
import {TaskCounter} from './components/TaskCounter';
import {TaskSearch} from './components/TaskSearch';
import {TaskList} from './components/TaskList';
import {TaskItem} from './components/TaskItem';
import {CreateTaskButton} from './components/CreateTaskButton';

import './css/styles.css';

/* const defaultTareas = [
  { id: 1, text: 'Lavar la ropa', completed: false },
  { id: 2, text: 'Hacer la tarea', completed: false },
  { id: 3, text: 'Ver los cursos', completed: true },
  { id: 4, text: 'Esuchar Música', completed: false },
]; */

function useLocalStorage( itemName, initialValue ) {
  
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [ items, setItem ] = React.useState( initialValue );

  React.useEffect(() => {
    setTimeout(() => {

      try {
        //  CambiarLLamamos el item "Task_v1" de nuestro localStorage 
        const localStorageItem = localStorage.getItem( itemName);
        //  Variable que almacenará las tareas
        let parsedItem;

        if ( !localStorageItem ) {
          localStorage.setItem( itemName, JSON.stringify( initialValue ) );
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse( localStorageItem );
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }

    }, 1500);
  }, []);

  /**
   * Función para poder modificar los valos en el localStorage
   * - Se utiliza el item "Task_v1" para los valores
   */
  const saveChangeItem = ( newItem ) => {
    try {
      const stringifiedItem = JSON.stringify( newItem );
      localStorage.setItem( itemName, stringifiedItem );
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return { items, saveChangeItem, loading, error };
}

function App() {

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

  /**
   *  Variables para procesos utilizando el state: 
   *  - Filtrar tasks completados
   *  - Total de task almacenados
   */
  const completedTask = tasks.filter(task => !!task.completed).length;
  const totalTask = tasks.length;

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
  const completeTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const newTasks = [...tasks];
    //  Cambiar el valor de la propiedad completed de la tarea
    newTasks[taskIndex].completed = true;
    saveChangeTasks(newTasks);
  }

  const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const newTasks = [...tasks];
    //  Eliminar el elemento seleccionado
    newTasks.splice(taskIndex, 1);
    saveChangeTasks(newTasks);
  }

  return (
    <Fragment>
      <div className="container">

        <TaskCounter 
          completed={completedTask}
          total={totalTask}
        />

        <TaskSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        
        <TaskList>
          { error && <p>Hubo un error...</p> }
          { loading && <p>Estamos cargando...</p> }
          { (!loading && !searchedTasks.length) && <p>Crear primer tarea...</p> }

          {
            searchedTasks.map(task => (
              <TaskItem 
                key={task.id} 
                text={task.text} 
                completed={task.completed}
                onComplete={() => completeTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))
          }
        </TaskList>

        <CreateTaskButton />
        
      </div>
    </Fragment>
  );
}

export default App;
