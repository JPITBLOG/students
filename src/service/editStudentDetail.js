import baseService from './base';

export function EditStudentDetail(psssStudentObject) {
    return baseService.post('/student/editstudent',psssStudentObject);
}