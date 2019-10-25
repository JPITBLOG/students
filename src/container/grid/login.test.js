import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './login';

configure({adapter: new Adapter()});

const setUp = () => {
    const component = shallow(<Login/>)
    return {
        component
    }
}

describe('Test case for testing login',() =>{
    test('username check',()=>
    {
        const {component} = setUp()
        const nameInput = component.find('input[type="text"]');
        expect(nameInput).toHaveLength(1)
        nameInput.simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
        expect(component.state('username')).toEqual('krishankantsinghal');
    })
    it('password check',()=>{
        const {component} = setUp()
        const passInput = component.find('input[type="password"]');
        expect(passInput).toHaveLength(1)
        passInput.simulate('change', {target: {name: 'password', value: 'krishankant123'}});
        expect(component.state('password')).toEqual('krishankant123');
    })
})