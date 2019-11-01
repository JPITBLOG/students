import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import baseService from '../service/base';
import {EditStudentDetail} from './editStudentDetail'
import {STUDENT_SUCCESSFUL_EDIT} from '../reducer/getAllStudent';
import {editData} from '../TestCaseValue/actionTestCaseValue';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);

describe("Edit student by action",() => {
    afterEach(() => {
        mock.reset();
    })
    it("Edit student",() => {
        const data = new FormData();
        data.append('_id',"0123");
        data.append('fname', "fname");
        data.append('lname', "lname");
        data.append('dob', "11-8-95");
        data.append('studentImage', "there is image file");
        data.append('address_one', "this is my first address");
        data.append('address_two', "this is my first address");
        data.append('state', "Gujarat");
        data.append('city', "Surat");
        data.append('zipcod', "122211");
        data.append('isdelete', 0);
        const marksDetail = [{_id:"1",subject:"Gujarati",marks:23,isdelete: 0},
            {_id:"2",subject:"Maths",marks:40,isdelete: 1}]
        data.append('subjectContent',marksDetail);
        mock.onPost("/student/editstudent").reply(200,
            editData()
        )
        const expectedActions = [
            {
                type: STUDENT_SUCCESSFUL_EDIT, data: editData()
            }]
        const store = mockStore( {EditedData: []})
        return store.dispatch(EditStudentDetail(data))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})