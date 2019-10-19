import * as AddStudentdetailService from '../service/AddStudentDetail';
import {STUDENT_ADD_SUCCESSFUL,ERROR_IN_ADD_STUDENT} from '../reducer/AddStudentDetail';
export const AddStudentDetail = (psssStudentObject) => dispatch => {
    return AddStudentdetailService.AddStudentDetail(psssStudentObject)
        .then((response) => {
            if(response.status === 200){
                dispatch({
                    type:STUDENT_ADD_SUCCESSFUL,
                    data: response.data
                });
                return true;
            }
        }).catch((error)=> {
            if(error.response){
                dispatch({
                    type: ERROR_IN_ADD_STUDENT,
                    data: {error_msg: error.response? error.response.data.error : "there is an error while calling API"}
                });
                return false;
            }
        });
}
