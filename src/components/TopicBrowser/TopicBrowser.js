import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObjet from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';

class TopicBrowser extends Component{
    render(){
        return(
            <div>
                <div className='puzzleBox'>
                    <h1>Show Case</h1>
                    {/*
                    <ul className=''>
                        <li className='topicSelection'><a className='confirmationButton' href='#evenodd'>Even and Odd</a></li>
                        <li className='topicSelection'><button className='confirmationButton' onClick={(e) => this.onClick(e.target.innerHTML)}>Filter Object</button></li>
                        <li className='topicSelection'><button className='confirmationButton' onClick={(e) => this.onClick(e.target.innerHTML)}>Filter String</button></li>
                        <li className='topicSelection'><button className='confirmationButton' onClick={(e) => this.onClick(e.target.innerHTML)}>Palindrome</button></li>
                        <li className='topicSelection'><button className='confirmationButton' onClick={(e) => this.onClick(e.target.innerHTML)}>Sum</button></li>
                    </ul> */}
                </div>
                <EvenAndOdd id="evenodd"/>
                <FilterObjet />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
    onClick(val){
        debugger;
        switch(val){
            case('Even and Odd'):
                this.refs.evenodd.focus();
                break;

            case ('Filter Object'):
                this.FilterObjet.focus();
                break;

            case ('Filter String'):
                this.FilterString.focus();
                break;
                
            case ('Palindrome'):
                this.Palindrome.focus();
                break;

            case ('Sum'):
                this.Sum.focus();
                break;
        }
    }
}

export default TopicBrowser;