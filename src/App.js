import React, {Fragment} from 'react';
import {TaskCounter} from './components/TaskCounter';
import {TaskSearch} from './components/TaskSearch';
import {TaskList} from './components/TaskList';
import {TaskItem} from './components/TaskItem';
import {CreateTaskButton} from './components/CreateTaskButton';

import './css/styles.css';

const defaultTareas = [
  { id: 1, text: 'Lavar la ropa', completed: false },
  { id: 2, text: 'Hacer la tarea', completed: false },
  { id: 3, text: 'Ver los cursos', completed: true },
  { id: 4, text: 'Esuchar Música', completed: false },
];

function App() {

  /**
   *  Declaración de los state para: 
   *  - Obtener las tareas (tasks)
   *  - Valor de busqueda (searchValue)
   */
  const [ tasks, setTasks ] = React.useState(defaultTareas);
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
