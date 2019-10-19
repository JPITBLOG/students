const INITIAL_STATE = {
    deletemessage:"",
    error_message:""
};

export const STUDENT_DELETE_SUCCESSFULLY = "STUDENT_DELETE_SUCCESSFULLY";
export const ERROR_WHILE_DELETE_STUDENT = "ERROR_WHILE_DELETE_STUDENT";

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case STUDENT_DELETE_SUCCESSFULLY:{
            return Object.assign({},state,{deletemessage: action.data});
        }
        case ERROR_WHILE_DELETE_STUDENT:{
            return Object.assign({},state,{error_message: action.data.error_msg});
        }
        default:
            return state;
    }
}