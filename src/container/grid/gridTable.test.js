import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GridTable} from './gridTable';
import {getAllStudent,subjectData} from '../../TestCaseValue/componentTestCaseValue';

configure({adapter: new Adapter()});

const props = {
    dataget: "name",
    dataLength:{data_length:{ "dataLength": 6}},
    getAllStudent:{editFlag: 0,Allstudent:getAllStudent()},
    getAllSubject: {
        Allsubject: subjectData()
    }
}

describe('Test case for gridTable',() =>{
    let wrapper = shallow(<GridTable {...props}/>);
    test('check data is available in state',()=> {
        wrapper.setState({ allstudents :getAllStudent(),totalNumbarOfPage : 1})
        wrapper.instance().gridTable();
        expect(wrapper.state('allstudents').length).toEqual(2);
    })
    test("test case for click on page",() => {
        wrapper.setState({pageIndex:2,allstudents :getAllStudent()})
        wrapper.instance().clickOnPage(this,2);
        expect(wrapper.state('allstudents')).toHaveLength(2);
    })
    test('Test case for dataLength',() => {
        const wrapper = shallow(<GridTable {...props}/>);
        const resp = wrapper.instance().getDataLengthPromise();
        expect(resp).toEqual({"dataLength": 6});
    })
    test('Test case for Pagination Function',() => {
        const wrapper = shallow(<GridTable {...props}/>);
        wrapper.instance().paginationFunction();
        expect(wrapper.state({totalNumbarOfPage:2,dataLength:6,pageIndex:1}));
    })
})