import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class App extends Component{
    constructor(){
        super();
        this.state = {
            gifts : []
        }
    }

    addGift = () => {  
        let maxId = (this.state.gifts.length) ? this.state.gifts.reduce((max, id) => (id > max) ? id : max,0) : 0;
        this.setState({gifts: [...this.state.gifts, {id:++maxId}]});
    }

    render(){
        return(
            <div>
                <h1>Gift Giver</h1>
                <div className='gift-list'>
                    {this.state.gifts.map(gift => {
                        return (
                            <div key={gift.id}></div>
                        );
                    })}
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
            
        );
    };
};

export default App;