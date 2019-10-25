import * as deleteStudentService from '../service/deleteStudent';
import {STUDENT_DELETE_SUCCESSFULLY,ERROR_WHILE_DELETE_STUDENT} from '../reducer/deleteStudent';

export const deleteStudent = (studentId) => dispatch => {
    return deleteStudentService.deleteStudent(studentId)
        .then((response) => {
            if(response.status === 200){
                dispatch({
                    type:STUDENT_DELETE_SUCCESSFULLY,
                    data:response.data
                });
                return true;
            }
        }).catch((error) => {
            if(error.response){
                debugger
                dispatch({
                    type:ERROR_WHILE_DELETE_STUDENT,
                    data:{error_msg: error.response ? error.response.data.error : "there is an error while delete data"}
                })
                return false;
            }
        })
}