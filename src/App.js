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

function App() {

  //  CambiarLLamamos el item "Task_v1" de nuestro localStorage 
  const localStorageTasks = localStorage.getItem('Task_v1');
  //  Variable que almacenará las tareas
  let parsedTask;

  if ( !localStorageTasks ) {
    localStorage.setItem('Task_v1', JSON.stringify([]));
    parsedTask = [];
  } else {
    parsedTask = JSON.parse( localStorageTasks );
  }

  /**
   *  Declaración de los state para: 
   *  - Obtener las tareas (tasks)
   *  - Valor de busqueda (searchValue)
   */
  const [ tasks, setTasks ] = React.useState(parsedTask);
  const [ searchValue, setSearchValue ] = React.useState('');

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
   * Funcción para poder modificar los valos en el localStorage
   * - Se utiliza el item "Task_v1" para los valores
   */
  const saveChangeTasks = (newTasks) => {
    const stringifiedTasks = JSON.stringify(newTasks);
    localStorage.setItem('Task_v1', stringifiedTasks);
    setTasks(newTasks);
  }

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
