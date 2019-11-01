import React from 'react';
import { shallow,configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StudentMarks from './StudentMarks';
import {marksDetailData, subjectData} from "../../TestCaseValue/componentTestCaseValue";
import Store from "../../store";
import {Provider} from "react-redux";

configure({adapter: new Adapter()});

const props = {
    getAllSubject:{Allsubject:subjectData()},
    selectinputs: ['selectinput-0','selectinput-1','selectinput-2'],
    inputs: ['input-0','input-1','input-2'],
    link: ['link-0','link-1','link-2'],
    marksDetail:marksDetailData(),
    errors : {}
}

const matchSubjectData = [{_id:0,subject:"select"},...subjectData()]

describe('Test case for student marks',() => {
    const wrapper = mount(shallow(<Provider store={Store}><StudentMarks {...props}/></Provider>).get(0));
    test("check the component did mount",() => {
        expect(wrapper.state('subject')).toEqual(matchSubjectData);
    })
})