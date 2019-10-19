const INITIAL_STATE = {
    Allstudent: [],
    editFlag:0,
    error_msg: ""
};

export const STUDENT_FETCHED_SUCCESSFUL = "STUDENT_FETCHED_SUCCESSFUL";
export const ERROR_IN_FETCHED_STUDENT = "ERROR_IN_FETCHED_STUDENT";
export const STUDENT_SUCCESSFUL_EDIT = "STUDENT_SUCCESSFUL_EDIT";
export const ERROR_IN_EDIT_STUDENT = "ERROR_IN_EDIT_STUDENT";
export const EDIT_FLAG_SET_SUCCESSFUL = "EDIT_FLAG_SET_SUCCESSFUL";

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case STUDENT_FETCHED_SUCCESSFUL:{
            return Object.assign({},state,{...state,Allstudent:action.data});
        }
        case ERROR_IN_FETCHED_STUDENT:{
            return Object.assign({},state,{error_msg:action.data.error_msg});
        }
        case STUDENT_SUCCESSFUL_EDIT:{
            const allStud = state.Allstudent.slice()
            const recIndex = allStud.findIndex(x => x._id === action.data[0]._id )
            allStud[recIndex] = action.data[0]
            state.Allstudent = allStud
            state.editFlag = 1
            return Object.assign({}, state)            
        }
        case ERROR_IN_EDIT_STUDENT:{
            return Object.assign({},state,{error_msg:action.data.error_msg});
        }
        case EDIT_FLAG_SET_SUCCESSFUL:{
            state.editFlag = action.data
            return Object.assign({},state);
        }
        default:
            return state;
    }
}

