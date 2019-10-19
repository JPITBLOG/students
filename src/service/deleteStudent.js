import baseService from './base';
export function deleteStudent(student_id) {
    return baseService.post('/student/deletestudent?id='+student_id);
}