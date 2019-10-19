import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';

const composeEnhance = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhance(
    applyMiddleware(thunk)
);
const INITIAL_STATE = {
    getAllStudent: {
        Allstudent: [],
        editFlag: 0
    },
    getAllSubject: {
        Allsubject: []
    },
    AddStudentDetail: {
        response_success_msg: ""
    },
    dataLength: {
        data_length:{}
    },
    deleteStudent: {
        deletemessage: ""
    }

};
export default createStore( rootReducer,INITIAL_STATE,enhancer);
