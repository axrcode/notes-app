import React from 'react';
import { TaskContext } from './TaskContext';

function TaskForm() {

    const [ newTaskValue, setNewTaskValue ] =  React.useState('');

    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);

    const onChange = (event) => {
        setNewTaskValue(event.target.value) 
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };

    return (
        <div className="md:flex justify-center">
            <div className="md:w-1/2 lg:w-2/5 px-5 md:px-0">
                <form onSubmit={onSubmit}>
                    <div className="bg-gray-800 mt-40 px-6 py-10 md:p-10 shadow-lg rounded-sm">
                        <div className="card-body">

                            <div className="space-y-4">
                                <label className="font-bold uppercase block">Ingresa una nueva tarea</label>
                                <textarea 
                                    value={newTaskValue}
                                    onChange={onChange}
                                    className="bg-gray-700 w-full p-2 px-4 mt-2 placeholder-gray-500 text-xl rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-80"
                                    placeholder="Limpiar el jardín..."
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="flex mt-5">
                                <div className="w-1/2 pr-1">
                                    <button
                                        className="w-full p-2 text-white rounded-sm uppercase font-bold hover:bg-gray-700 cursor-pointer transition-all"
                                        type="button"
                                        onClick={onCancel}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                <div className="w-1/2 pl-1">
                                    <button
                                        className="bg-blue-600 w-full p-2 text-white rounded-sm uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                                        type="submit"
                                    >
                                        Crear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { TaskForm };