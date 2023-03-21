import PropTypes from "prop-types"
import TasksView from '../TasksView';
import FormView from '../FormView';
import EditableTask from "../EditableTask";

import styles from './styles.module.scss';

const Layout = ({
    todos,
    taskText,
    handleSubmit,
    handleChange,
    handleDeleteTask,
    handleCompleteTask,
    handleEditTask,
    handleCancelTask,
    handleSaveTask
}) => {
    return (
    <div className={styles.wrapper}>
        
        <h1>TO DO</h1>

        <FormView 
        handleSubmit={handleSubmit} 
        taskText = {taskText}
        handleChange = {handleChange}/>



        <div> {todos.map(({id, text,  isEditable, isCompleted}, index) => {
                const taskNumber = index +1
                
                return isEditable ? 
                <EditableTask
                key = {id}
                id = {id}
                taskNumber = {taskNumber}
                taskText = {text}
                handleSaveTask = {handleSaveTask}
                handleCancelTask = {handleCancelTask}
                /> : 
                
                <TasksView
                key = {id}
                id = {id}
                taskText = {text}
                taskNumber = {taskNumber}
                handleDeleteTask = {handleDeleteTask}
                handleCompleteTask = {handleCompleteTask}
                isCompleted = {isCompleted}
                handleEditTask = {handleEditTask}
                />
            })}
        </div>


    </div>)
}


Layout.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string,
            text: PropTypes.string,
            isEditable: PropTypes.bool,
            isCompleted: PropTypes.bool
        }).isRequired,
    ).isRequired

}

export default Layout