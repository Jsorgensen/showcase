import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = ({
            num1: '',
            num2: '',
            sum: ''
        })
    }
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <input className='inputLine' onChange={(e) => this.updateUserInput2(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.solveToyProblem()}> Calculate </button>
                <span className='resultsBox'>Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
    updateUserInput(val){
        this.setState({
            num1: val
        })
    } 
    updateUserInput2(val) {
        this.setState({
            num2: val
        })
    }
    solveToyProblem(){
        var sum = Number(this.state.num1) + Number(this.state.num2);
        if(isNaN(sum))
            sum = 'Not a Number.....'
        
        this.setState({sum: sum})
    }
}

export default Sum;