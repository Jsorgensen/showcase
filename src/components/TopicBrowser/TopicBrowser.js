import React, {Component} from 'react';

class TopicBrowser extends Component{
    render(){
        return(
            <div className='puzzleBox'>
                <h1>Topics</h1>
                <ul className=''>
                    <li><button className='confirmationButton' href=''>Even and Odd</button></li>
                    <li><button className='confirmationButton' href=''>Filter Object</button></li>
                    <li><button className='confirmationButton' href=''>Filter String</button></li>
                    <li><button className='confirmationButton' href=''>Palindrome</button></li>
                    <li><button className='confirmationButton' href=''>Sum</button></li>
                </ul>
            </div>
        )
    }
}

export default TopicBrowser;