import React from 'react';
import { TaskProvider } from './components/TaskContext';
import { AppUI } from './components/AppUI';

import './css/styles.css';

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
