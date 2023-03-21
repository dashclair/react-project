import PropTypes from 'prop-types';
import { Button } from "@mui/material";

import { styles } from './styles';

const CustomButton = ({
    text,
    type,
    disabled = false, 
    onClick, 
    color = "purple",
    size
}) => {
    return <Button type = {type} disabled = {disabled} onClick = {onClick} variant = 'contained' sx = {styles(color)} size = {size}>{text}</Button>
}

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string
}

export default CustomButton