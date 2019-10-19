const INITIAL_STATE = {
    response_success_msg: "",
    error_msg: ""
};

export const STUDENT_ADD_SUCCESSFUL = "STUDENT_ADD_SUCCESSFUL";
export const ERROR_IN_ADD_STUDENT = "ERROR_IN_ADD_STUDENT";

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case STUDENT_ADD_SUCCESSFUL:{
            return Object.assign({},state,{response_success_msg:action.data});
        }
        case ERROR_IN_ADD_STUDENT:{
            return Object.assign({},state,{error_msg:action.data.error_msg});
        }
        default:
            return state;
    }
}

