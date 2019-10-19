import * as Studentdetail from '../service/getAllStudent';
import {STUDENT_FETCHED_SUCCESSFUL,ERROR_IN_FETCHED_STUDENT} from '../reducer/getAllStudent';
export const getAllStudents = (pageIndex) => dispatch => {
    return Studentdetail.getAllStudents(pageIndex)
            .then((response) => {
                if(response.status === 200){
                    dispatch({
                        type:STUDENT_FETCHED_SUCCESSFUL,
                        data: response.data
                    });
                }
                return true;
            }).catch((error)=> {
            if(error.response){
                dispatch({
                    type: ERROR_IN_FETCHED_STUDENT,
                    data: {error_msg: error.response? error.response.data.error : "there is an error while calling API"}
                });
                return false;
            }
        });
    }
