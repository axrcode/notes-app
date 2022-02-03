const TaskNotFound = () => {
    return (
        <div className="flex justify-center">
            <div 
                className="bg-gray-800 text-center text-red-500 mt-5 rounded-sm py-10 px-10 md:px-40 shadow-sm text-5xl hover:shadow-lg border-double border-4 border-gray-500 border-opacity-25"
            >
                <i class="fas fa-times-circle"></i> <br/>
                <span className="text-lg md:text-xl uppercase font-bold">
                    Tarea no encontrada
                </span>
            </div>
        </div>
    )
}
export default TaskNotFound
