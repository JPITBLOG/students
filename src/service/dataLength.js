import baseService from './base';
export function dataLength() {
    return baseService.get('/numberofdata/datacount');
}