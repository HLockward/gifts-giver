import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App', () =>{
    const id = 1;
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initialize the `state` with an empty list of gifts', () =>{
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add gift` button', () =>{
       
        beforeEach(() =>{
            app.find('.btn-add').simulate('click');
        });

        afterEach(() =>{
            app.setState({gifts: []});
        })

        it('adds a new gift to `state`', () =>{
            expect(app.state().gifts).toEqual([{id}]);
        });
    
        it('add a new gift to the rendered list', () =>{
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it('add a new Gift component', () =>{
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user want to remove the added gift',()=>{
            beforeEach(() =>{
                app.instance().removeGift(id);
            });

            it('removes the gift from `state`', () =>{
                expect(app.state().gifts).toEqual([]);
            });

        });
    });
    
});

