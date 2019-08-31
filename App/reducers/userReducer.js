import { CLEAR_USER, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, SET_USER, SIGNUP_USER, SIGNUP_USER_FAILED, SIGNUP_USER_SUCCESS} from '../actions/type'

const initialState = {
    userId: 'hello!',
    userName: "",
    password: "",
    profilePix: "",
    loginSuccess: false,
    signupSuccess: false,
    token: ""
};

export default (state = initialState,  action) => {
    switch(action.type) {
        case CLEAR_USER:
            return {...state, userName: " "};
        case LOGIN_USER:
            return {...state, userName: " "};
        case LOGIN_USER_FAILED:
            return {...state, userName: " "};
        case LOGIN_USER_SUCCESS:
            return {...state, userName: " "};
        case SET_USER:
            return {...state, userName: " "};
        case SIGNUP_USER:
            return {...state, userName: " "};
        case SIGNUP_USER_FAILED:
            return {...state, userName: " "};
        case SIGNUP_USER_SUCCESS:
            return {...state, signupSuccess: true};
        default:
            return state;    
    } 
}