import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import {getAllStudents} from './getAllStudent'
import {getAllStudent} from '../TestCaseValue/actionTestCaseValue';
import {STUDENT_FETCHED_SUCCESSFUL} from '../reducer/getAllStudent';
import baseService from '../service/base';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);

describe("Get All Student by action",() => {
    afterEach(() => {
        mock.reset();
    })
    it("Get All Student",() => {
        const pageIndex = 1;
        mock.onGet("/student/getallstudent?page="+pageIndex).reply(200,
            getAllStudent())
        const expectedActions = [
            { type: STUDENT_FETCHED_SUCCESSFUL, data: getAllStudent()}]
        const store = mockStore( {EditedData: []})
        return store.dispatch(getAllStudents(pageIndex))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})