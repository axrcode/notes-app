import React, {Fragment} from 'react';
import {TaskCounter} from './components/TaskCounter';
import {TaskSearch} from './components/TaskSearch';
import {TaskList} from './components/TaskList';
import {TaskItem} from './components/TaskItem';
import {CreateTaskButton} from './components/CreateTaskButton';

const tareas = [
  { id: 1, text: 'Lavar la ropa', completed: false },
  { id: 2, text: 'Hacer la tarea', completed: false },
  { id: 3, text: 'Ver los cursos', completed: false },
  { id: 4, text: 'Esuchar Música', completed: false },
];

function App() {
  return (
    <Fragment>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        {
          tareas.map(tarea => (
            <TaskItem key={tarea.id} text={tarea.text} />
          ))
        }
      </TaskList>
      <CreateTaskButton />
    </Fragment>
  );
}

export default App;
