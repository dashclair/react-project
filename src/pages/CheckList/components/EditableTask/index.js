import PropTypes from "prop-types"
import styles from './styles.module.scss';
import useForm from '../../../../hooks/useForm';
import CustomButton from "../../../../components/CustomButton";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const EditableTask = ({id, taskNumber, taskText, handleSaveTask, handleCancelTask}) => {
    const {form, handleChange } = useForm({inputValue:taskText})

    return(
        <div className = {styles.task_wrapper}>

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
                            
                            <input  type = 'text' name = "inputValue" value = {form.inputValue} onChange = {handleChange}></input>
                            
                            <div className = {styles.btns}>
                                <CustomButton text = "save" size = "small" color = "lightcoral" onClick = {()=>handleSaveTask({id, newText:form.inputValue})}/>
                                <CustomButton text = "cancel" size = "small" color = "lightcoral" onClick = {()=>handleCancelTask(id)}/>
                            </div>
                        </div>
                    }
                </AccordionDetails>
            </Accordion>
            
            {/* <h3>{taskNumber}</h3>

            <input  type = 'text' name = "inputValue" value = {form.inputValue} onChange = {handleChange}></input> */}

            {/* <CustomButton text = "save" size = "small" color = "lightcoral" onClick = {()=>handleSaveTask({id, newText:form.inputValue})}/>
            <CustomButton text = "cancel" size = "small" color = "lightcoral" onClick = {()=>handleCancelTask(id)}/> */}



            {/* <ButtonGroup size="small" aria-label="small button group">
            {buttons}
            </ButtonGroup> */}
            {/* <button className = {styles.btn} onClick = {()=>handleSaveTask({id, newText:form.inputValue})} > save </button>
            <button className = {styles.btn} onClick = {()=>handleCancelTask(id)}> cancel </button> */}
        </div>
    )
}

EditableTask.propTypes = {
    id: PropTypes.string.isRequired,
    taskNumber: PropTypes.number.isRequired,
    taskText: PropTypes.string.isRequired,
    handleSaveTask: PropTypes.func.isRequired,
    handleCancelTask:PropTypes.func.isRequired

}

export default EditableTask