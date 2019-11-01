import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import{getAllSubject} from './getAllSubject'
import '../reducer/getAllSubject';
import baseService from '../service/base';
import {passSubject} from '../TestCaseValue/actionTestCaseValue';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);


describe('getAllSubject from action', () => {
    afterEach(() => {
        mock.reset();
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        mock.onGet('/subject/getallsubject').reply(200,
            passSubject())
        const expectedActions = [
            { type: "SUBJECT_FETCHED_SUCCESSFUL", data: passSubject() }
        ]
        const store = mockStore( {Allsubject: []} )
        return store.dispatch(getAllSubject())
            .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})


