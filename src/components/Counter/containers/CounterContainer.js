import { Component} from "react"
import CounterView from "../components/CounterView"

class CounterContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countValue: 0,
            isEven: true,
            numberType: 'Введено четное число'
        }
    }

    handleIncrement = () => {
        this.setState((state)=> {
            const incrementedValue = this.state.countValue +1

            return {
                countValue: incrementedValue,
                isEven: incrementedValue % 2 === 0 ? true : false,
                numberType: incrementedValue % 2 === 0 ? 'Введено четное число' : 'Введено нечетное число'
            }
        })
    };

    handleDiscrement = () =>{
        this.setState((state) => {
            const discrementedValue = this.state.countValue-1

            if(discrementedValue < 0) {
                return state
            }

            return {
                countValue:discrementedValue,
                isEven: discrementedValue % 2 === 0 ? true : false,
                numberType: discrementedValue % 2 === 0 ? 'Введено четное число' : 'Введено нечетное число'
            }
            })
    }

    handleReset = () => {
        this.setState({
            countValue:0,
            isEven:true,
            numberType:'Введено четное число' })
    }

    render() {
       return <CounterView 
       numberType={this.state.numberType}
       isEven = {this.state.isEven}
       counterValue={this.state.countValue} 
       increment = {this.handleIncrement} 
       discrement = {this.handleDiscrement} 
       reset = {this.handleReset}/>
    }
}

export default CounterContainer