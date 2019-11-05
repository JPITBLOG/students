import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from './grid';
import GridTable from './gridTable';
import StudentRegister from './StudentRegister';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

const setUp = () => {
    const component = shallow(<Grid/>)
    return {
        component
    }
}

describe('Test case for grid',() =>{
    const {component} = setUp()
    // const componentSnap = renderer.create(<Grid/>);
    // let tree = componentSnap.toJSON();
    test('check grid Add student model open',()=>
    {
        const addStudentButton = component.find('#AddStudent');
        expect(addStudentButton).toHaveLength(1)
        addStudentButton.simulate('click');
        expect(component.state('modal')).toEqual(true);
    })
    it('check grid child component(GridTable)',()=>{
        expect(component.find(GridTable)).toHaveLength(1);
    })
    it('check grid child component(StudentRegister)',()=>{
        expect(component.find(StudentRegister)).toHaveLength(1);
    })
})