import * as EditStudentdetailService from '../service/editStudentDetail';
import {STUDENT_SUCCESSFUL_EDIT,ERROR_IN_EDIT_STUDENT,EDIT_FLAG_SET_SUCCESSFUL} from '../reducer/getAllStudent';
export const EditStudentDetail = (psssStudentObject) => (dispatch) => {
    return EditStudentdetailService.EditStudentDetail(psssStudentObject)
        .then((response) => {
            if(response.status === 200){
                dispatch({
                    type:STUDENT_SUCCESSFUL_EDIT,
                    data: response.data
                });
                return true;
            }
        }).catch((error)=> {
            if(error.response){
                dispatch({
                    type: ERROR_IN_EDIT_STUDENT,
                    data: {error_msg: error.response? error.response.data.error : "there is an error while calling API"}
                });
                return false;
            }
        });
}

export const EditFlag = (editFlag) => (dispatch) => {
    dispatch({
        type:EDIT_FLAG_SET_SUCCESSFUL,
        data: editFlag
    });
}
