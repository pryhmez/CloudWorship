const axios = require("axios");
import { CLEAR_USER, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, SET_USER, SIGNUP_USER, SIGNUP_USER_FAILED, SIGNUP_USER_SUCCESS} from './type';

export const userAction = () => {
    return {
        type: SET_USER
    };
}


export const signUp = (first, last, email, password) => {

    return (dispatch) => {
        // dispatch(getUser())
        return new Promise((resolve, reject) => {
            axios.post('http://cloudworship.com/api/v1/sign_up',
                {
                    "first_name": first,
                    "last_name": last,
                    "email": email,
                    "password": password,
                    "confirm_password": password
                })
                .then((response) => {
                    resolve(" " + response.data)
                    dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data});
                    // alert(JSON.parse(response.data))
                    console.log(res)
                    if(response){
                        // return resolve ({signupSuccess: true})
                    }
                    // handle your response here, create an object/array/array of objects etc... 
                    // and return it in dispatch(getToDosSuccess(data over here))

                    // return (dispatch(getToDosSuccess(response.data)))
                })
                .catch(err => {

                    dispatch({type: LOGIN_USER_FAILED});
                    return reject({message: "something went wrong" + String(err)})
            })
        })

    }
}