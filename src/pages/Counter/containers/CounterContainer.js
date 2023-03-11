import { Component} from "react"
// import CounterView from "../components/CounterView"
import Layout from "../components/Layout"

class CounterContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countValue: 0
        }
    }

    handleIncrement = () => {
        this.setState((state)=> {
            const incrementedValue = this.state.countValue +1

            return {
                countValue: incrementedValue
            }
        })
    };

    handleDecrement = () =>{
        this.setState((state) => {
            const discrementedValue = this.state.countValue-1

            if(discrementedValue < 0) {
                return state
            }

            return {
                countValue:discrementedValue
            }
            })
    }

    handleReset = () => {
        this.setState({
            countValue:0
         })
    }

    render() {
       return <Layout
       counterValue={this.state.countValue} 
       handleIncrement = {this.handleIncrement} 
       handleDecrement = {this.handleDecrement} 
       handleReset = {this.handleReset}/>
    }
}

export default CounterContainer