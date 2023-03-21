import { useDispatch, useSelector } from "react-redux"
import useForm from "../../../hooks/useForm";

import Layout from "../components/Layout"

import { createTask, deleteTask, comleteTask, editTask, cancelTask, saveTask} from "../reducers";
import { sortedTasksSelector } from "../selectors";


const CheckListContainer = () => {

    const {form, handleReset, handleChange} = useForm({taskText:""})

    const dispatch = useDispatch();
    const todos = useSelector(sortedTasksSelector)

    const handleSubmit = (event) => {
        event.preventDefault();
       
        dispatch(createTask(form));

        handleReset()
    };

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    const handleCompleteTask = (id) => {
        dispatch(comleteTask(id));
    };

    const handleEditTask = (id) => {
        dispatch(editTask(id));
    };

    const handleCancelTask = (id) => {
        dispatch(cancelTask(id));
    };

    const handleSaveTask = (taskData) => {
        dispatch(saveTask(taskData));
    }


    return (
        <Layout
        todos = {todos}
        handleSubmit = {handleSubmit}
        taskText = {form.taskText}
        handleChange = {handleChange}
        handleReset = {handleReset}
        handleDeleteTask = {handleDeleteTask}
        handleCompleteTask = {handleCompleteTask}
        handleEditTask  = {handleEditTask}
        handleCancelTask = {handleCancelTask}
        handleSaveTask = {handleSaveTask}
        />
        )

}

export default CheckListContainer