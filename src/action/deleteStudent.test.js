import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import {deleteStudent} from './deleteStudent'
import {STUDENT_DELETE_SUCCESSFULLY} from '../reducer/deleteStudent';
import baseService from '../service/base';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);

describe("delete student by action",() => {
    afterEach(() => {
        mock.reset();
    })
    it("delete student",() => {
        const deleteId = 12;
        mock.onPost("/student/deletestudent?id="+deleteId).reply(200,
            {message:"Student delete successfully"}
            )
        const expectedActions = [
            { type: "STUDENT_DELETE_SUCCESSFULLY", data: {
                    message:"Student delete successfully"
                } }]
        const store = mockStore( {DeleteMessage: []})
        return store.dispatch(deleteStudent(deleteId))
            // .then(() => {
            //     expect(store.getActions()).toEqual(expectedActions)
            // })
    })
})