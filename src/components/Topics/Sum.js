import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = ({

        })
    }
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <input className='inputLine' onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.solveToyProblem()}> Check </button>
                <span className='resultsBox'>Result: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
    updateUserInput(val){
        this.setState({
            userInput: val
        })
    }
    solveToyProblem(){

    }
}

export default Sum;