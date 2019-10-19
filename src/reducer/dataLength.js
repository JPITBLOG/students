const INITIAL_STATE = {
    data_length:{},
    error_msg:""
}

export const DATA_LENGTH_FETCHED_SUCCESSFULLY = "DATA_LENGTH_FETCHED_SUCCESSFULLY";
export const ERROR_IN_FETCH_DATA_LENGTH = "ERROR_IN_FETCH_DATA_LENGTH";

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case DATA_LENGTH_FETCHED_SUCCESSFULLY:{
            return Object.assign({},state,{data_length: action.data})
        }
        case ERROR_IN_FETCH_DATA_LENGTH:{
            return Object.assign({},state,{error_msg: action.data.error_msg})
        }
        default:
            return state;
    }
}