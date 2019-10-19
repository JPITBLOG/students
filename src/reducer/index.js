import {combineReducers} from 'redux';
import getAllStudent from './getAllStudent';
import getAllSubject from './getAllSubject';
import AddStudentDetail from './AddStudentDetail';
import dataLength from './dataLength';
import deleteStudent from './deleteStudent';

export default combineReducers({getAllStudent,getAllSubject,AddStudentDetail,dataLength,deleteStudent});
