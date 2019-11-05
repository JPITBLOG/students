import React from 'react';
import {StudentRegister} from './StudentRegister';
import {shallow, configure} from 'enzyme';
import {subjectData, studentData, setEditData, matchAddElementState} from '../../TestCaseValue/componentTestCaseValue';
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const props = {
    getAllSubject:{Allsubject:subjectData()},
    studentData: studentData(),
    toggle: jest.fn(),
    isOpen: false
}

const file = ({url:'example.png',type: 'image/png'});

const e = {
    target: { value: 'jigar',files:[file]}
};

describe('Test case for Student Register',() => {
    let store;
    const student = setEditData();
    const mockPropSetToggle = jest.fn();
    global.URL.createObjectURL = jest.fn();
    const TogalDataSpy = jest.spyOn(StudentRegister.prototype, 'toggle');
    const setTogalDataSpy = jest.spyOn(StudentRegister.prototype, 'setTogalData');
    // const sethandleChange = jest.spyOn(StudentRegister.prototype, 'handleChange');

    let wrapper = shallow(<StudentRegister  {...props}/>);

    test('test studentRegister component',() => {
        expect(wrapper.state('subject')).toEqual([{_id:0,subject:"select"},...subjectData()])
    })
    test('test for addElement function',() => {
        wrapper.instance().addElement();
        expect(wrapper.state('selectinputs')).toEqual(['selectinput-0','selectinput-1','selectinput-2']);
        expect(wrapper.state('inputs')).toEqual(['input-0','input-1','input-2']);
        expect(wrapper.state('marksDetail')).toEqual(matchAddElementState())
    })
    test('test for deleteElement function',() => {
        wrapper.instance().deleteElement(this,1);
        expect(wrapper.state('selectinputs')).toEqual(['selectinput-0','selectinput-2']);
        expect(wrapper.state('inputs')).toEqual(['input-0','input-2']);
        expect(wrapper.state('link')).toEqual(['link-0','link-2']);
        expect(wrapper.state('deletedMarksDetail')).toEqual([{_id:"5db15d02a234701cd4500d47",subject:"5dada8f927bf5f0124f5aabf",marks:"36",isdelete:1}])
    })
    test('test for commonValidation function',() => {
        const commonValidationResp = wrapper.instance().commonvalidation('commonValidationParameter');
        expect(commonValidationResp).toBe(true);
    })
    test('test for nameValidation function',() => {
        const nameValidationResp = wrapper.instance().nameValidation('jigar12');
        expect(nameValidationResp).toBe("only letter is allowed");
    })
    test('test for setEditedData function',() =>{
        wrapper.instance().setEditedData(student);
        expect(wrapper.state('_id')).toEqual("0123");
    })
    test('test for clearState function',() => {
       wrapper.instance().clearState();
       expect(wrapper.state('_id')).toEqual("0123");
       expect(wrapper.state('fname')).toEqual("Biren");
    });
    test('test for toggle function',() => {
        wrapper.instance().toggle(2);
        expect(wrapper.state('activeTab')).toEqual(2);
    })
    test('test for render snapShot',() => {
            const Modal = wrapper.find('#modal');
            expect(Modal.prop('isOpen')).toEqual(false);
            wrapper.find("#navLink1").simulate('click');
            expect(TogalDataSpy).toHaveBeenCalledTimes(2);
            wrapper.instance().setTogalData();
            expect(setTogalDataSpy).toHaveBeenCalledTimes(1);
            expect(Modal.find('TabContent').prop('activeTab')).toEqual(2);
            expect(Modal.find('StudentForm').prop('error_flag')).toEqual(false);
            wrapper.instance().handleChange(e,'fname');
            expect(wrapper.state('fname')).toEqual('jigar');
            global.URL.createObjectURL = jest.fn(() => e.target.files[0]);
            wrapper.instance().onChangeHandler(e);
            expect(wrapper.state('srcImage')).toEqual({url:'example.png',type: 'image/png'});
            wrapper.setState({errors:{test:'test case error'}});
            expect(Modal.find('StudentForm').prop('errors')).toEqual({});
            wrapper.update();
            const component = renderer.create(
                <StudentRegister  {...props}/>
            );
            let componentsnap = component.toJSON();
            expect(componentsnap).toMatchSnapshot();
        })

})
