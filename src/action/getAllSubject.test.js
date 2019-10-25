import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import{getAllSubject} from './getAllSubject'
import '../reducer/getAllSubject';
import baseService from '../service/base';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(baseService);


describe('getAllSubject from action', () => {
    afterEach(() => {
        mock.reset();
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        mock.onGet('/subject/getallsubject').reply(200,
            [
                {
                    "_id": "5dada8f927bf5f0124f5aabf",
                    "subject": "Gujarati"
                },
        {
            "_id": "5dada92127bf5f0124f5aac0",
            "subject": "Hindi"
        },
        {
            "_id": "5dada93527bf5f0124f5aac1",
            "subject": "English"
        },
        {
            "_id": "5dada94127bf5f0124f5aac2",
            "subject": "Maths"
        }
        ])
        const expectedActions = [
            { type: "SUBJECT_FETCHED_SUCCESSFUL", data: [
                    {
                        "_id": "5dada8f927bf5f0124f5aabf",
                        "subject": "Gujarati"
                    },
                    {
                        "_id": "5dada92127bf5f0124f5aac0",
                        "subject": "Hindi"
                    },
                    {
                        "_id": "5dada93527bf5f0124f5aac1",
                        "subject": "English"
                    },
                    {
                        "_id": "5dada94127bf5f0124f5aac2",
                        "subject": "Maths"
                    }
                ] }
        ]
        const store = mockStore( {Allsubject: []} )
        return store.dispatch(getAllSubject())
            .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})


