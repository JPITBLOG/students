import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import {dataLength} from './dataLength'
import '../reducer/getAllSubject';
import baseService from '../service/base';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);

describe("get data length",() => {
    afterEach(() => {
        mock.reset();
    })
    it('data length get Action', () => {
        mock.onGet('/numberofdata/datacount').reply(200,
            {
                "dataLength": 4
            })
        const expectedActions = [
            { type: "DATA_LENGTH_FETCHED_SUCCESSFULLY", data: {
                    "dataLength": 4
                } }]
        const store = mockStore( {DataLength: []} )
        return store.dispatch(dataLength())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})