import PropTypes from "prop-types"
import CounterView from '../../../../components/CounterView';
import styles from './styles.module.scss';

const Layout = ({
    counters, 
    handleCounterAdd, 
    handleCounterReset, 
    handleIncrement, 
    handleRemove, 
    handleDecrement, 
    handleReset,
    totalSum
}) =>{

    const average = totalSum < 1 && counters.length < 1 ? 0 : totalSum / counters.length;

    return (
        <div className= {styles.wrapper}>
            <h1>Counters Manager</h1>

            <div className= {styles.info}>
                <p>Total: {totalSum}</p>
                <p>Average: {average}</p>
                <p>Amount: {counters.length}</p>
            </div>

            <div className = {styles.buttons}>
                <button className = {styles.btn} onClick = {handleCounterAdd}> Add counter</button>
                <button className = {styles.btn} onClick = {handleCounterReset}> Reset</button>
            </div>

            <div className = {styles.countersContainerArea}>
                {counters.map(({id, countValue}) => {
                    return <CounterView 
                    id = {id}
                    key = {id}
                    counterValue = {countValue}
                    handleIncrement={handleIncrement} 
                    handleDecrement = {handleDecrement} 
                    handleReset = {handleReset} 
                    handleRemove = {handleRemove}/>
                })}
            </div>
        </div>
    )
}

Layout.propTypes = {
    counters: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string,
            counterValue: PropTypes.number,
        }).isRequired
    ).isRequired,
    handleCounterAdd: PropTypes.func.isRequired,
    handleCounterReset: PropTypes.func.isRequired,
}

export default Layout