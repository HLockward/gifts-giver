import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Gift from './Gift';
import { getMaxId } from '../helper/index';

class App extends Component{
    constructor(){
        super();
        this.state = {
            gifts : []
        }
    }

    addGift = () => {  
        let maxId = getMaxId(this.state.gifts);
        const id = ++maxId;
        const gifts = [...this.state.gifts, {id}];
        this.setState({gifts});
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    }

    render(){
        return(
            <div className='gift'>
                <h1>Gift Giver</h1>
                <div className='gift-list'>
                    {this.state.gifts.map(gift => {
                        return (
                            <Gift 
                                key={gift.id} 
                                gift={gift}
                                removeGift={this.removeGift}
                            />
                        );
                    })}
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
            
        );
    };
};

export default App;