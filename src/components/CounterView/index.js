import PropTypes from 'prop-types'
import { memo } from 'react';

import styles from './styles.module.scss';

const CounterView = ({id, counterValue, handleIncrement, handleDecrement, handleReset, handleRemove}) => {

    const isEven = counterValue % 2 === 0;
    return (
        <>
        < div className = {styles.wrapper} 
        style={{
            backgroundColor: isEven ? 'purple' : 'yellow',
          }}>
            <div className = {styles.display}>{counterValue}</div>
            <div className= {styles.display}>{isEven ? 'Even' : 'Odd'}</div>

            <div className = {styles.buttons}>
                <button disabled = {counterValue === 0} className = {styles.btn} onClick = {()=> handleDecrement(id)}>-</button>
                <button className = {styles.btn} onClick = {()=> handleReset(id)}>Reset</button>
                <button className = {styles.btn} onClick = {()=> handleIncrement(id)}>+</button>
            </div>

            {handleRemove && (
            <button className = {styles.remove} onClick = {()=> handleRemove(id)}>Remove
            </button>)}
        </div>
        </>
    )
}

CounterView.propTypes = {
    id: PropTypes.string,
    counterValue: PropTypes.number.isRequired,
    handleIncrement:PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default memo(CounterView)