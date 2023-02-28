import PropTypes from 'prop-types'

import styles from './styles.module.scss';

const CounterView = ({counterValue, isEven, increment, discrement, reset, numberType}) => {
    return (
        <div className = {styles.wrapper} 
        style={{
            backgroundColor: isEven ? 'purple' : 'yellow',
          }}>
            <div className = {styles.display}>{counterValue}</div>
            <div className= {styles.display}>{numberType}</div>

            <div className = {styles.buttons}>
                <button className = {styles.btn} onClick = {discrement}>-</button>
                <button className = {styles.btn} onClick = {reset}>Reset</button>
                <button className = {styles.btn} onClick = {increment}>+</button>
            </div>
        </div>
    )
}

CounterView.propTypes = {
    counterValue: PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    discrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    isEvent: PropTypes.bool.isRequired,
    evenNumber: PropTypes.string.isRequired
}

export default CounterView