import baseService from './base';

export function AddStudentDetail(psssStudentObject) {
    return baseService.post('/student/addstudent',psssStudentObject);
}