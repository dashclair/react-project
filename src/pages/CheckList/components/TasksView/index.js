import { memo } from 'react';
import PropTypes from "prop-types"
import CustomButton from "../../../../components/CustomButton";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


import styles from './styles.module.scss';


const TasksView = ({
    id, 
    taskText, 
    taskNumber,
    handleEditTask, 
    handleDeleteTask, 
    handleCompleteTask,
    isCompleted
}) =>{
    return (
        <div>

            <Accordion defaultExpanded = 'true'>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >

                    <Typography> Task {taskNumber}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    {
                        <div className = {styles.task_wrapper}>

                            <div className = {isCompleted ? styles.complete : " "}>{taskText}</div>

                            <div className = {styles.btns}>
                                <CustomButton text = "edit" size = "small" color = "lightcoral" onClick = {()=>handleEditTask(id)} disabled = {isCompleted} />
                                <CustomButton text = "complete" size = "small" color = "lightcoral" onClick = {()=>handleCompleteTask(id)} disabled = {isCompleted} />
                                <CustomButton text = "delete" size = "small" color = "darkred" onClick = {()=>handleDeleteTask(id)}  />
                            </div>
                        </div>
                    }
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

TasksView.propTypes = {
    id: PropTypes.string.isRequired,
    taskText: PropTypes.string.isRequired,
    taskNumber: PropTypes.number.isRequired,
    handleEditTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleCompleteTask: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired

}


export default memo(TasksView)