import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = ({
            userInput: '',
            palindrome: true
        })
    }
    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.solveToyProblem()}> Check </button>
                <span className='resultsBox'>Result: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
    updateUserInput(val){
        this.setState({userInput: val})
    }
    solveToyProblem(){
        var arr = this.state.userInput.split('');
        var result = true;

        for(var i=0; i<arr.length/2; i++){
            var a = arr[i], b = arr[arr.length-1-i]
            if(arr[i] !== arr[arr.length-1-i]){
                result = false;
                break;
            }
        }

        this.setState({palindrome: result})
    }
}

export default Palindrome;