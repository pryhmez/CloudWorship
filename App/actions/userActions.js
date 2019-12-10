const axios = require("axios");
import { Toast } from 'native-base';
import { CLEAR_USER, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, SET_USER, SIGNUP_USER, SIGNUP_USER_FAILED, SIGNUP_USER_SUCCESS} from './type';

let baseUrl = "http://cloudworship.com/api/v1/";

export const userAction = () => {
    return {
        type: SET_USER
    };
}


export const signUp = (first, last, email, password) => {

    return (dispatch) => {
        // dispatch(getUser())
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + 'sign_up',
                {
                    "first_name": first,
                    "last_name": last,
                    "email": email,
                    "password": password,
                    "confirm_password": password
                })
                .then((response) => {
                   
                    dispatch({ type: SET_USER, payload: response.data});

                    
                    // return(response.data)
                    console.warn(response.data.message)
                    if(response){
                        return resolve (response.data.message)
                    }
                    // handle your response here, create an object/array/array of objects etc... 
                    // and return it in dispatch(getToDosSuccess(data over here))

                    
                })
                .catch(err => {

                    dispatch({type: SIGNUP_USER_FAILED, payload: true});
                    return resolve({message: "something went wrong" + String(err)})
            })
        })

    }
}


export const login = (email, password) => {
console.warn(email + " " + password)
    return (dispatch) => {

        return new Promise((resolve, reject) => {
            axios.post(baseUrl + "sign_in", 
            {
                "email": email,
                "password": password
            }).then((response) => {
                dispatch({type: LOGIN_USER, payload: response.data});
                if (response) {
                    
                    return resolve (response.data.message)
                }else{
                    return reject ("kdfnlkdkd")
                }
            })
            .catch(err => {
                  
                return reject(err)
            })
        })
    }
}