import { useState } from "react"
import CounterView from "../../../components/CounterView"

const FunctionalCounterContainer = () => {
    const [countValue, setCountValue] = useState(0)
    
    const handleIncrement = () => {
        setCountValue(countValue + 1)
    }
    const handleDecrement = () => {
        setCountValue(countValue - 1 < 0 ? 0 : countValue - 1)
    }

    const handleReset = () => {
        setCountValue (0)
    }

    
    return <CounterView 
    counterValue = {countValue}
    handleIncrement = {handleIncrement}
    handleDecrement = {handleDecrement}
    handleReset = {handleReset}/>
}

export default FunctionalCounterContainer