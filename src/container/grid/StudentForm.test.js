import React from 'react';
import { shallow,configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StudentForm from './StudentForm';
import {errorData, stateData, studentData} from "../../TestCaseValue/componentTestCaseValue";

configure({adapter: new Adapter()});

const props = {
    error_flag : true,
    errors: errorData(),
    state : stateData()
}
describe('Test case for Student Register',() => {
    const wrapper = shallow(<StudentForm {...props}/>);
    const AlertElement = wrapper.find('#AlertId');
    const  firstName = wrapper.find("#fnam");
    const fnamError = wrapper.find('span').at(0).text();
    const  lastName = wrapper.find("#lnam");
    const lnameError = wrapper.find('span').at(1).text();
    const  dob = wrapper.find("#dob");
    const dobError = wrapper.find('span').at(2).text();
    const image = wrapper.find('img')
    const imageError = wrapper.find('span').at(3).text();
    const address1 = wrapper.find("#address1");
    const address1Error = wrapper.find('span').at(4).text();
    const address2 = wrapper.find("#address2");
    const address2Error = wrapper.find('span').at(5).text();
    const state = wrapper.find("#state");
    const stateError = wrapper.find('span').at(6).text();
    const city = wrapper.find("#city");
    const cityError = wrapper.find('span').at(7).text();
    const zipcod = wrapper.find("#zipcod");
    const zipcodError = wrapper.find('span').at(8).text();
    test('test for Alert', () => {
        expect((AlertElement).length).toEqual(1);
    })
    test('test case for firstname', () => {
            expect(firstName.props().value).toEqual("jigar");
            expect(fnamError).toEqual("there is an error in fname");
    })
    test('test case for Lastname', () => {
        expect(lastName.props().value).toEqual("patel");
        expect(lnameError).toEqual("there is an error in lname");
    })
    test('test case for Date of Birth', () => {
        expect(dob.props().value).toEqual('23/8/1995');
        expect(dobError).toEqual("there is an error in dob");
    })
    test('test case for Image', () => {
        expect(image.prop("src")).toEqual("http://localhost:8001\\uploads\\student\\2019-10-30T08-46-45.643Zasus1.jpeg");
        expect(imageError).toEqual("there is an error in select file")
    })
    test('test case for Address1', () => {
        expect(address1.props().value).toEqual('this is my first address');
        expect(address1Error).toEqual("there is an error in address1");
    })
    test('test case for Address2', () => {
        expect(address2.props().value).toEqual('this is my second address');
        expect(address2Error).toEqual("there is an error in address2");
    })
    test('test case for State', () => {
        expect(state.props().value).toEqual('Gujarat');
        expect(stateError).toEqual("there is an error in state");
    })
    test('test case for City', () => {
        expect(city.props().value).toEqual('Surat');
        expect(cityError).toEqual("there is an error in city");
    })
    test('test case for Zipcod', () => {
        expect(zipcod.props().value).toEqual("395007");
        expect(zipcodError).toEqual("there is an error in zipcode");
    })
})