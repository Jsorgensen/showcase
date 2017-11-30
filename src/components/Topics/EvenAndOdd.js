import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = ({
            evenArray: [],
            oddArray: [],
            userInput: ''
        })
    }
    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e)=>this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.solveToyProblem()}> Split </button>
                <span className='resultsBox'>Evens: {this.state.evenArray.join(", ")}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray.join(", ")}</span>
            </div>
        )
    }
    updateUserInput(val){
        this.setState({userInput: val});
    }
    solveToyProblem(){
        var arr = this.state.userInput.split(',');
        var even = [];
        var odd = [];

        even = arr.filter(num => num % 2 === 0);
        odd = arr.filter(num => num % 2 !== 0);

        this.setState({
            evenArray: even,
            oddArray: odd
        })
    }
}

export default EvenAndOdd;