import PropTypes from "prop-types"
import CustomButton from "../../../../components/CustomButton";

import styles from './styles.module.scss';

const FormView = ({taskText, handleSubmit, handleChange}) => {
    return (
        <form className={styles.form_wrapper} onSubmit = {handleSubmit}>
                <input type="text" name = "taskText"
                value = {taskText} onChange = {handleChange}></input>

                <CustomButton text = "add" type = "submit"/>
        </form>
    )
}

FormView.propTypes = {
    taskText: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange:PropTypes.func.isRequired
}

export default FormView