import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = ({
            unFilteredArray: ['Pizza', 'Pasta', 'Infinity Wars', 'Thor Ragnarok', 'Emma', 'Katie'],
            userInput: '',
            filteredArray: []
        })
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={(e)=>this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.solveToyProblem()}> Filter </button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
    updateUserInput(val){
        this.setState({
            userInput: val
        })
    }
    solveToyProblem(){
        var filtered = this.state.unFilteredArray.filter(str => str.includes(this.state.userInput));

        this.setState({filteredArray: filtered});
    }
}

export default FilterString;