import baseService from './base';

export function getAllStudents(pageIndex) {
    return baseService.get('/student/getallstudent?page='+pageIndex);
}