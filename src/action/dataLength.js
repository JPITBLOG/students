import * as DataLengthService from '../service/dataLength';
import {DATA_LENGTH_FETCHED_SUCCESSFULLY,ERROR_IN_FETCH_DATA_LENGTH} from '../reducer/dataLength';

export const dataLength = () => dispatch => {
    return DataLengthService.dataLength()
        .then((response) => {
            if(response.status === 200){
                dispatch({
                    type:DATA_LENGTH_FETCHED_SUCCESSFULLY,
                    data:response.data
                });
             return true;
            }
        }).catch((error) => {
            if(error.response){
                dispatch({
                    type:ERROR_IN_FETCH_DATA_LENGTH,
                    data:{error_msg: error.response ? error.response.data.error : "there is an error while getting data length"}
                });
                return false;
            }
        })
}