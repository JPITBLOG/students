import * as Subjectdetail from '../service/getAllSubject';
import {SUBJECT_FETCHED_SUCCESSFUL,ERROR_IN_FETCHED_SUBJECT} from '../reducer/getAllSubject';
import axios from "axios";
import {baseUrl} from "../service/base";
export const getAllSubject = () => dispatch => {
    return Subjectdetail.getAllSubject()
        .then((response) => {
            if(response.status === 200){
                dispatch({
                    type:SUBJECT_FETCHED_SUCCESSFUL,
                    data: response.data
                });
            }
            return true;
        }).catch((error)=> {
            if(error.response){
                dispatch({
                    type: ERROR_IN_FETCHED_SUBJECT,
                    data: {error_msg: error.response? error.response.data.error : "there is an error while calling API"}
                });
                return false;
            }
        });
    }

export const fetchTodos = () => {
    debugger;
    const baseService = axios.create({
        baseURL: 'http://192.168.0.103:8001'
    });
    return dispatch => {
        debugger;
        return baseService.get('/subject/getallsubject')
            .then((res) => {
                debugger;
                if(res.status === 200){
                    dispatch({
                        type:SUBJECT_FETCHED_SUCCESSFUL,
                        data: res.data
                    });
                }
            })
            .catch((error)=> {
                if(error.response){
                    dispatch({
                        type: ERROR_IN_FETCHED_SUBJECT,
                        data: {error_msg: error.response? error.response.data.error : "there is an error while calling API"}
                    });
                    return false;
                }
            });
    }
}
