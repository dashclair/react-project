import { useCallback, useState } from "react"
import {v4 as uuid} from "uuid"
import Layout from "../components/Layout"
import { isEven } from "../../../utils"

const CountersManagerContainer = () => {
    const [counters, setCounters] = useState([]);

    const handleCounterAdd = () => {
        const newCounter = {
            id:uuid(),
            countValue: 0
        }

        setCounters((state)=>{
            const updatedCounter = state.map((counter) => {
                return {
                    ...counter,
                    countValue: isEven(counter.countValue) ? counter.countValue + 1 : counter.countValue
                }
            });

            updatedCounter.push(newCounter)

            return updatedCounter
        })
    }

    const handleCounterReset = () => {

        setCounters([])
    }

    const handleRemove = useCallback((id) => {
        setCounters ((state) =>{
            const countersCopy = structuredClone(state);
            const countersCopyById = countersCopy.findIndex ((counter) => counter.id === id);

            countersCopy.splice(countersCopyById,1)

            return countersCopy.map ((counter) => {
                return {
                    ...counter,
                    countValue: !isEven(counter.countValue) ? counter.countValue -1 : counter.countValue
                }
            })
        })
    }, [])

    const handleIncrement = useCallback((countId) => {
        setCounters ((state) =>{
            const countersCopy = structuredClone(state);
            const foundCounter = countersCopy.find(({id}) => id === countId);
            
            foundCounter.countValue +=1

            return countersCopy
        })
    }, [])

    const handleDecrement = useCallback((countId) => {
        setCounters((state) => {
            const countersCopy = structuredClone(state);
            const foundCounter = countersCopy.find(({id}) => id === countId);
            
            foundCounter.countValue -=1

            return countersCopy
        })
    }, [])

    const handleReset = useCallback((countId) => {
        setCounters((state) => {
            const countersCopy = structuredClone(state);
            const foundCounter = countersCopy.find(({id}) => id === countId);
            
            foundCounter.countValue = 0

            return countersCopy
        })
    }, [])

    const totalSum = counters.reduce((result, counter) => result + counter.countValue, 0);


    return (
        <Layout 
        counters = {counters} 
        handleCounterAdd = {handleCounterAdd} 
        handleCounterReset = {handleCounterReset}
        handleIncrement = {handleIncrement}
        handleDecrement = {handleDecrement}
        handleReset = {handleReset}
        handleRemove = {handleRemove}
        totalSum = {totalSum}/>
        
    )
}

export default CountersManagerContainer