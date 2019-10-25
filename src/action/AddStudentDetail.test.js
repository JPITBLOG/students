import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import{AddStudentDetail} from './AddStudentDetail'
import '../reducer/getAllSubject';
import baseService from '../service/base';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);

describe('Add Student by action', () => {
    afterEach(() => {
        mock.reset();
    })

    it('create add data action', () => {
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
        mock.onPost('/student/addstudent').reply(200,
            {message:"student data added successfully"})
        const expectedActions = [
            { type: "STUDENT_ADD_SUCCESSFUL", data: {
                    message:"student data added successfully"
                } }
        ]
        const store = mockStore( {StudentMessage: []})
        return store.dispatch(AddStudentDetail(data))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})