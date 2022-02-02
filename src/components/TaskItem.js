function TaskItem( props ) {

    return(
        <div className="md:flex justify-center">
            <div className="md:w-1/2 lg:w-2/5">
                <li className={`task-item bg-gray-800 mt-5 rounded-sm shadow-lg hover:bg-gray-700 py-3 ${props.completed && 'bg-gray-900 hover:bg-gray-800'}`}>
                    <span 
                        className={`icon icon-check ${props.completed && 'icon-check-active text-green-600'}`}
                        onClick={props.onComplete}
                    >
                        <i className="fas fa-check-circle hover:text-green-600 transition-all"></i>
                    </span>

                    <p className={`${props.completed && 'task-item-completed font-bold text-gray-500'} text-lg pl-3`}>
                        { props.text }
                    </p>

                    <span 
                        className="icon hover:text-red-600 transition-all"
                        onClick={props.onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </span>
                </li>
            </div>
        </div>
    );
}

export {TaskItem};