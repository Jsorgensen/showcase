import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = ({
            unFilteredArray: [
                { item: 'frisbee',
                quantity: 4,
                color: 'blue'
                }, 
                { item: 'dog',
                quantity: 1
                }, 
                { item: 'laptop',
                color: 'black'
                }
            ],
            userInput: '',
            filteredArray: []
        })
    }
    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={(e)=>this.updateUserInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.solveToyProblem()}> Filter </button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
    updateUserInput(val){
        this.setState({
            userInput: val
        })
    }
    solveToyProblem(){
        var filtered = this.state.unFilteredArray.filter(obj => this.state.userInput in obj);

        this.setState({
            filteredArray: filtered
        })
    }
}

export default FilterObject;