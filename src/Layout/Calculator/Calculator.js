import React from 'react';
import Keypad from '../Keypad/Keypad';
import Footer from './Footer';
import Screen from './Screens/Screen';

class Calculator extends React.Component{
    state={
        equation:'',
        result:0,
        clicked:'AC'
    }

    onButtonPress = event => {
        let equation = this.state.equation;
        const buttonPressed = event.target.innerHTML;
        this.setState({clicked:'C'});
        if(equation === '' && ['+','-','*','/','%'].indexOf(buttonPressed) !== -1){
            equation += '';
            alert('Enter a number first!')
        }
        if(['%'].indexOf(buttonPressed) !== -1){
            try {
                const evalPercentage = (eval(equation.trimEnd()))/100;
                const percentageResult = Number.isInteger(evalPercentage) ? evalPercentage : evalPercentage.toFixed(3);
                this.setState({equation:'', result:percentageResult});
            } catch (error) {
                alert('Invalid Mathematical Equation!');
            }
        }
        if(buttonPressed === 'AC' || buttonPressed === 'C') return this.clear();
        else if((buttonPressed >= '0' && buttonPressed <= '9') || buttonPressed === '.') equation += buttonPressed;
        else if(equation !== '' && ['+','-','*','/','%'].indexOf(buttonPressed) !== -1) equation += '' + buttonPressed + '';
        else if(buttonPressed === '='){
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(3);
                this.setState({result});
            } catch (error) {
                alert('Invalid Mathematical Equation!');
            }
        }
        else{
            equation = equation.trim();
            equation = equation.substr(0, equation.length-1);
        }
        this.setState({equation:equation});
    }

    clear(){
        this.setState({equation:'', result:0});
    }

    render(){
        return(
            <main className="calculator">
               <Screen equation={this.state.equation} result={this.state.result}/>
               <Keypad buttonText={this.state.clicked} onButtonPress={this.onButtonPress}/>
               <Footer/>
            </main>
        )
    }
}

export default Calculator;