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
        <div className="row w-100">
            <div className="col-md-4 offset-md-4">
                <form onSubmit={onSubmit}>
                    <div class="card bg-light text-dark">
                        <div class="card-body">

                            <div class="form-group">
                                <label className="font-weight-bold">Ingresa una nueva tarea</label>
                                <textarea 
                                    value={newTaskValue}
                                    onChange={onChange}
                                    class="form-control"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="row mt-5">
                                <div className="col-6 pr-1">
                                    <button
                                        className="btn btn-white btn-block btn-sm pr-0"
                                        type="button"
                                        onClick={onCancel}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                <div className="col-6 pl-1">
                                    <button
                                        className="btn btn-success btn-block btn-sm pl-0"
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