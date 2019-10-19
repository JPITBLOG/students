import baseService from './base';

export function getAllSubject() {
    return baseService.get('/subject/getallsubject');
}