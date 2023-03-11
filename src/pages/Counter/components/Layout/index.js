import CounterView from "../../../../components/CounterView";

const Layout = ({counterValue, handleDecrement, handleIncrement, handleReset}) =>{
    return (
        <div>
            <CounterView 
            counterValue={counterValue} 
            handleDecrement={handleDecrement} 
            handleIncrement={handleIncrement} 
            handleReset = {handleReset}
             />
        </div>
    )
}

export default Layout