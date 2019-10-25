import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import expect from 'expect' // You can use any testing library
import {getAllStudents} from './getAllStudent'
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
            [{
                    "_id": "5db15d02a234701cd4500d45",
                    "fname": "Biren",
                    "lname": "Pithavala",
                    "dob": "2017-09-23",
                    "studentImage": "http://localhost:8001\\uploads\\student\\2019-10-24T08-12-50.250Zacer1.jpeg",
                    "address_one": "SultanaBad,Bhimpor,Surat",
                    "address_two": "SultanaBad,Bhimpor,Surat",
                    "state": "Gujarat",
                    "city": "Surat",
                    "zipcod": "343432",
                    "isdelete": "0",
                    "marks": [
                        {
                            "_id": "5db15d02a234701cd4500d46",
                            "subjectId": "5dada92127bf5f0124f5aac0",
                            "marks": "34",
                            "isdelete": "0"
                        },
                        {
                            "_id": "5db15d02a234701cd4500d47",
                            "subjectId": "5dada8f927bf5f0124f5aabf",
                            "marks": "36",
                            "isdelete": "0"
                        }
                    ]
                },
                {
                    "_id": "5dadafb927bf5f0124f5aac7",
                    "fname": "Tejash",
                    "lname": "Prajapati",
                    "dob": "2018-09-13",
                    "studentImage": "http://localhost:8001\\uploads\\student\\2019-10-21T13-16-41.396Zacer5.jpeg",
                    "address_one": "Nanpura,Surat,Gujarat",
                    "address_two": "Nanpura,Surat,Gujarat",
                    "state": "Gujarat",
                    "city": "Surat",
                    "zipcod": "395007",
                    "isdelete": "0",
                    "marks": [
                        {
                            "_id": "5dadafb927bf5f0124f5aac8",
                            "subjectId": "5dada94127bf5f0124f5aac2",
                            "marks": "30",
                            "isdelete": "0"
                        },
                        {
                            "_id": "5dadafb927bf5f0124f5aac9",
                            "subjectId": "5dada93527bf5f0124f5aac1",
                            "marks": "35",
                            "isdelete": "0"
                        }
                    ]
                }]
        )
        const expectedActions = [
            { type: STUDENT_FETCHED_SUCCESSFUL, data: [{
                    "_id": "5db15d02a234701cd4500d45",
                    "fname": "Biren",
                    "lname": "Pithavala",
                    "dob": "2017-09-23",
                    "studentImage": "http://localhost:8001\\uploads\\student\\2019-10-24T08-12-50.250Zacer1.jpeg",
                    "address_one": "SultanaBad,Bhimpor,Surat",
                    "address_two": "SultanaBad,Bhimpor,Surat",
                    "state": "Gujarat",
                    "city": "Surat",
                    "zipcod": "343432",
                    "isdelete": "0",
                    "marks": [
                        {
                            "_id": "5db15d02a234701cd4500d46",
                            "subjectId": "5dada92127bf5f0124f5aac0",
                            "marks": "34",
                            "isdelete": "0"
                        },
                        {
                            "_id": "5db15d02a234701cd4500d47",
                            "subjectId": "5dada8f927bf5f0124f5aabf",
                            "marks": "36",
                            "isdelete": "0"
                        }
                    ]
                },
                    {
                        "_id": "5dadafb927bf5f0124f5aac7",
                        "fname": "Tejash",
                        "lname": "Prajapati",
                        "dob": "2018-09-13",
                        "studentImage": "http://localhost:8001\\uploads\\student\\2019-10-21T13-16-41.396Zacer5.jpeg",
                        "address_one": "Nanpura,Surat,Gujarat",
                        "address_two": "Nanpura,Surat,Gujarat",
                        "state": "Gujarat",
                        "city": "Surat",
                        "zipcod": "395007",
                        "isdelete": "0",
                        "marks": [
                            {
                                "_id": "5dadafb927bf5f0124f5aac8",
                                "subjectId": "5dada94127bf5f0124f5aac2",
                                "marks": "30",
                                "isdelete": "0"
                            },
                            {
                                "_id": "5dadafb927bf5f0124f5aac9",
                                "subjectId": "5dada93527bf5f0124f5aac1",
                                "marks": "35",
                                "isdelete": "0"
                            }
                        ]
                    }] }]
        const store = mockStore( {EditedData: []})
        return store.dispatch(getAllStudents(pageIndex))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})