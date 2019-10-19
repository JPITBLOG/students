const INITIAL_STATE = {
    Allsubject: [],
    error_msg: ""
};

export const SUBJECT_FETCHED_SUCCESSFUL = "SUBJECT_FETCHED_SUCCESSFUL";
export const ERROR_IN_FETCHED_SUBJECT = "ERROR_IN_FETCHED_SUBJECT";

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case SUBJECT_FETCHED_SUCCESSFUL:{
            return Object.assign({},state,{...state,Allsubject:action.data});
        }
        case ERROR_IN_FETCHED_SUBJECT:{
            return Object.assign({},state,{error_msg:action.data.error_msg});
        }
        default:
            return state;
    }
}

